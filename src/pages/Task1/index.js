import React, { useState } from 'react';
import { Button, Container, Nav, Tab } from 'react-bootstrap';
import '../../assets/css/calculator.css';
import Products from './Products';
import Containers from './Containers';
import Stuffing from './Stuffing';

const Task1 = () => {
  const [stuffDisabled, setStuffDisabled] = useState(true);

  return (
    <Container className='py-5'>
      <Tab.Container defaultActiveKey={'prod'}>
        <Nav variant="tabs" className="calcTabs">
          <Nav.Item>
            <Nav.Link eventKey="prod"><i className='fa-solid fa-box' /> Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="cont"><i className='fa-solid fa-truck' /> Containers & Trucks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="stuff" disabled={stuffDisabled}><i className='fa-solid fa-boxes-stacked' /> Stuffing Rusult</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="calcContent">
          <Tab.Pane eventKey="prod">
            <Products />
          </Tab.Pane>
          <Tab.Pane eventKey="cont">
            <Containers stuffDisabled={stuffDisabled} setStuffDisabled={setStuffDisabled} />
          </Tab.Pane>
          <Tab.Pane eventKey="stuff">
            <Stuffing />
          </Tab.Pane>
        </Tab.Content>

      </Tab.Container>
    </Container>
  )
}

export default Task1