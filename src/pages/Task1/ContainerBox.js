import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, PerspectiveCamera, Edges } from '@react-three/drei';
import { BoxGeometry } from 'three';
import data from '../../configs/data';

const mmToMeters = (mm) => mm / 1000;

const ContainerBox = () => {
  const containerLength = data.containerFeatures.length / 1000;
  const containerWidth = data.containerFeatures.width / 1000;
  const containerHeight = data.containerFeatures.height / 1000;

  const arrangeProducts = () => {
    const positions = [];
    let x = -containerLength / 2;
    let y = -containerHeight / 2;
    let z = -containerWidth / 2;

    const occupiedSpace = [];

    const isSpaceAvailable = (x, y, z, length, width, height) => {
      if (x + length > containerLength / 2 || x < -containerLength / 2 ||
        y + height > containerHeight / 2 || y < -containerHeight / 2 ||
        z + width > containerWidth / 2 || z < -containerWidth / 2) {
        return false;
      }

      for (const space of occupiedSpace) {
        if (x < space.x + space.length && x + length > space.x &&
          y < space.y + space.height && y + height > space.y &&
          z < space.z + space.width && z + width > space.z) {
          return false;
        }
      }

      return true;
    };

    const addOccupiedSpace = (x, y, z, length, width, height) => {
      occupiedSpace.push({ x, y, z, length, width, height });
    };

    for (const product of data.products) {
      const productLength = product.length / 1000;
      const productWidth = product.width / 1000;
      const productHeight = product.height / 1000;

      for (let q = 0; q < product.quantity; q++) {
        let placed = false;
        while (!placed) {
          if (isSpaceAvailable(x, y, z, productLength, productWidth, productHeight)) {
            positions.push({
              pos: [x + productLength / 2, y + productHeight / 2, z + productWidth / 2],
              color: product.color,
              args: [productLength, productHeight, productWidth],
            });
            addOccupiedSpace(x, y, z, productLength, productWidth, productHeight);
            placed = true;
          } else {
            z += productWidth;
            if (z + productWidth > containerWidth / 2) {
              z = -containerWidth / 2;
              y += productHeight;
              if (y + productHeight > containerHeight / 2) {
                y = -containerHeight / 2;
                x += productLength;
                if (x + productLength > containerLength / 2) {
                  break;
                }
              }
            }
          }
        }
      }
    }

    return positions;
  };

  const allProductPositions = arrangeProducts();

  return (
    <Canvas style={{ height: '400px' }}>
      <PerspectiveCamera makeDefault position={[10, 10, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Container Box */}
      <Box args={[containerLength, containerHeight, containerWidth]} position={[0, 0, 0]}>
        <meshStandardMaterial color="gray" opacity={0.2} transparent={true} />
      </Box>

      {/* product box */}
      {allProductPositions.map((item, index) => (
        <>
          <Box
            key={index}
            args={item.args}
            position={item.pos}
          >
            <meshStandardMaterial color={item.color} />
          </Box>
          <Edges
            geometry={new BoxGeometry(item.args[0], item.args[1], item.args[2])}
            position={item.pos}
          >
            <lineBasicMaterial color="red" />
          </Edges>
        </>
      ))}

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default ContainerBox;
