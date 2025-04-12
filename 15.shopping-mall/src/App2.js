import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';

function App() {
  const [clothes, setClothes] = useState(pList);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'/> 

      <Container>
        <Row>
          <Col>
            <img src = {`${process.env.PUBLIC_URL}/img/clothes1.png`} width="75%"/>
            <h4>{clothes[0].title}</h4>
            <p>{clothes[0].price}</p>
          </Col>
          <Col>
            <img src = {`${process.env.PUBLIC_URL}/img/clothes2.png`} width="75%"/>
            <h4>{clothes[1].title}</h4>
            <p>{clothes[1].price}</p>
          </Col>
          <Col>
            <img src = {`${process.env.PUBLIC_URL}/img/clothes3.png`} width="75%"/>
            <h4>{clothes[2].title}</h4>
            <p>{clothes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function PListCol() {
  return (
    <>
      <Col>
        <img src = {`${process.env.PUBLIC_URL}/img/clothes1.png`} width="75%"/>
        <h4>상품명</h4>
        <p>가격</p>
      </Col>
    </>
  )
}

export default App;
