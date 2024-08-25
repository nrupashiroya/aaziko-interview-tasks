import React from 'react'
import { Table } from 'react-bootstrap'
import data from '../../configs/data'

const Products = ({ setActiveKey }) => {
  return (
    <>
      <Table className='productTable text-center' responsive>
        <thead>
          <tr>
            <th className='text-start'>Sr. No.</th>
            <th className='text-start'>Product Name</th>
            <th>Length (mm)</th>
            <th>Width (mm)</th>
            <th>Height (mm)</th>
            <th>Weight (kg)</th>
            <th>Quantity</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {data.products?.length > 0 && data.products?.map((product, index) => {
            return (
              <tr key={index}>
                <td className='text-start'>{index + 1}</td>
                <td className='text-start'>{product.name}</td>
                <td>{product.length}</td>
                <td>{product.width}</td>
                <td>{product.height}</td>
                <td>{product.weight}</td>
                <td>{product.quantity}</td>
                <td><div className='contColor' style={{ background: product.color }} /></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default Products