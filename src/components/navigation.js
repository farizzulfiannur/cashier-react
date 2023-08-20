import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import './style/component.css';

function Navbars() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className="logo">Cashier App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link >Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Link</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
