import "./Navbar.scss"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function NavbarMainPages() {
    const dataUser = JSON.parse(localStorage.getItem("user"))
    const user = dataUser[0]
    const nameLocal = user.name
  return (
    <Navbar  bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#" className="col-3">
        <h3 className="home-title">
          <b>
            <span>HOT</span>FLIX
          </b>
        </h3>
        </Navbar.Brand>
        <Navbar.Toggle 
        aria-controls="navbarScroll" 
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto col my-2 my-lg-0  navbar-list"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown variant="" title="HOME" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Home style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Home style 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Home style 3
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CATALOG" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Catalog style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Catalog style 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Details style 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Details style 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="pricing-plan" href="#" disabled>
             PRICING PLAN
            </Nav.Link>
            <NavDropdown title=". . . " id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
             Contacts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Help center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Privacy policy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
             Admin pages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Singin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
             Sing up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Forgot password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              404
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex me-3">
            <Form.Control  type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"/>
            <NavDropdown 
            title="EN" 
            id="navbarScrollingDropdown"  
            className="me-3 navbar-light">
              <NavDropdown.Item href="#action3">English</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Spanish
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Russian
              </NavDropdown.Item>
            </NavDropdown>
            <Button className="me-3 col-3" variant="outline-warning">{user ? nameLocal : <Link to="/singin" >SING IN</Link> }</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMainPages;