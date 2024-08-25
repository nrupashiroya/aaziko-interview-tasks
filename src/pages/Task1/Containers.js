import React from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';
import data from '../../configs/data';
import ContainerBox from './ContainerBox';

const Containers = ({ stuffDisabled, setStuffDisabled }) => {
  const totalPackages = data.products.reduce((accumulator, product) => accumulator + product.quantity, 0);
  const totalVolume = data.products.reduce((accumulator, product) => accumulator + (product.length * product.width * product.height * product.quantity * 0.000000001), 0);
  const totalWeight = data.products.reduce((accumulator, product) => accumulator + (product.weight * product.quantity), 0);

  return (
    <>
      <h5 className='mb-3'>Select Container:</h5>
      <Row>
        <Col lg={3}>
          <Form.Group className={`contInput ${!stuffDisabled ? 'selected' : ''}`} controlId="containers">
            <Form.Label>
              <p>20' Standard</p>
              <img src='/images/containerImg.jpeg' alt='container' />
            </Form.Label>
            <Form.Check type="checkbox" checked={!stuffDisabled} onChange={(e) => setStuffDisabled(!e.target.checked)} />
          </Form.Group>
        </Col>
      </Row>

      {!stuffDisabled &&
        <>
          <ContainerBox />
          <Row className='contDetails mt-3'>
            <Col>
              <ul>
                <li>Total: {totalPackages} Packages</li>
                <li>Cargo Volume: {totalVolume} m<sup>3</sup></li>
                <li>Cargo Weight: {totalWeight} kg</li>
              </ul>
            </Col>

            <Col>
              <Table className='contTable'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Packages</th>
                    <th>Volume</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {data.products?.length > 0 && data.products?.map((product, index) => {
                    const volume = product.length * product.width * product.height * product.quantity * 0.000000001

                    return (
                      <tr key={index}>
                        <td><div className='contColor' style={{ background: product.color }} /></td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{(volume).toFixed(2)} m<sup>3</sup></td>
                        <td>{product.weight * product.quantity} kg</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      }
    </>
  )
}

export default Containers