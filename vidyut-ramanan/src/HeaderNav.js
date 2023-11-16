import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function HeaderNav({ navBackground, navTheme }) {
  const [downloadResumeColor, setDownloadResumeColor] = useState(
    navBackground === "dark" ? "light" : "dark"
  );

  const navbarToggle = () => {
    if (navTheme === "light") {
      resumeButtonToggle();
    }
  };
  const resumeButtonToggle = () => {
    downloadResumeColor === "dark"
      ? setDownloadResumeColor("light")
      : setDownloadResumeColor("dark");
  };
  const fontSize = {
    fontFamily: "Sans-serif",
    fontSize: "20px",
  };
  const expand = "md";

  const downloadResume = async () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Navbar
      fixed="top"
      key={expand}
      expand={expand}
      bg={navBackground}
      data-bs-theme={navTheme}
      onToggle={navbarToggle}
    >
      <Container fluid>
        <Navbar.Brand href="#Home" className="ps-4">
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
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" justify-content-end flex-grow-1 pe-4">
              <Nav.Link className="me-5" style={fontSize} href="#Home">
                Home
              </Nav.Link>
              <Nav.Link className="me-5" style={fontSize} href="#About">
                About
              </Nav.Link>
              <Nav.Link className="me-5" style={fontSize} href="#Projects">
                Projects
              </Nav.Link>
              <Nav.Link className="me-4" style={fontSize} href="#Contact">
                Contact
              </Nav.Link>
            </Nav>
            <Button
              className="me-4"
              style={fontSize}
              variant={downloadResumeColor}
              onClick={downloadResume}
            >
              Resume
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
