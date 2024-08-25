import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container className='homeDiv text-center py-5'>
      <h2>Tasks</h2>
      <ul>
        <li>
          <Link to='/task-1'>Task 1</Link>
        </li>
        <li>
          <Link to='/task-2'>Task 2</Link>
        </li>
      </ul>
    </Container>
  )
}

export default Home