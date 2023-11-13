import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function HeaderNav({ navBackground, navTheme }) {
  const fontSize = {
    fontFamily: "Sans-serif",
    fontSize: "20px",
  };
  const expand = "md";

  return (
    <Navbar
      fixed="top"
      key={expand}
      expand={expand}
      bg={navBackground}
      data-bs-theme={navTheme}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="ps-4">
          <img
            src={navTheme === "light" ? "/my-logo.png" : "my-logo-white.png"}
            width="50"
            height="50"
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
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-4">
              <Nav.Link className="me-5" style={fontSize} href="#Home">
                Home
              </Nav.Link>
              <Nav.Link className="me-5" style={fontSize} href="#Projects">
                About
              </Nav.Link>
              <Nav.Link className="me-5" style={fontSize} href="#About">
                Projects
              </Nav.Link>
              <Nav.Link className="me-5" style={fontSize} href="#Resume">
                Contact
              </Nav.Link>
              <Nav.Link style={fontSize} href="#Contact">
                Resume
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
