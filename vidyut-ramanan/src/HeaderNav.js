import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function HeaderNav() {
  const fontSize = { fontFamily: "inherit", fontSize: "24px", color: "black" };
  const expand = "sm";
  return (
    <Navbar
      fixed="top"
      key={expand}
      expand={expand}
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/my-logo.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
            alt="v logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Vidyut Ramanan
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link style={fontSize} href="#Home">
                Home
              </Nav.Link>
              <Nav.Link style={fontSize} href="#Projects">
                Projects
              </Nav.Link>
              <Nav.Link style={fontSize} href="#About">
                About
              </Nav.Link>
              <Nav.Link style={fontSize} href="#Resume">
                Resume
              </Nav.Link>
              <Nav.Link style={fontSize} href="#Contact">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
