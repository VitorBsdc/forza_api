import React from 'react';
import './estilo_header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


const Header = () => {
    return (
      <div >
 <Navbar variant="dark" bg="primary" className="">
    <Container>
          <img src="assets/icon-forza.png" className="logo" />
          <h1 className="segredo">FORZA API</h1>
          
    <Nav className="header-links">
      <Nav.Link className="header-link" href="https://github.com/public-apis/public-apis#games-comics" target="_blank">REPOSITÓRIO</Nav.Link>
      <Nav.Link className="header-link" href="https://docs.forza-api.tk/" target="_blank">API</Nav.Link>
      <Nav.Link className="header-link" href="https://github.com/nexusgroup6" target="_blank">GITHUB</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</div>

    );
  
}


export default Header;