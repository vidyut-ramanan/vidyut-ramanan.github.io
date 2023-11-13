import { useState } from "react";
import HeaderNav from "./HeaderNav";
import backgroundImage from "./background.jpeg";
import Card from "react-bootstrap/Card";

import { EnvelopeOpenFill, Github, Linkedin } from "react-bootstrap-icons";

var sectionStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  height: "100vh",
};

const iconSize = "40px";

const projects = [
  {
    ImageUrl:
      "https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40..v1657319390.jpg",
    Title: "Place Holder 1",
    Description:
      "Description description description description description description description description description description description description description description",
  },
  {
    ImageUrl:
      "https://img.freepik.com/premium-vector/computer-display-monitor-realistic-3d-isolated_177006-195.jpg",
    Title: "Place Holder 2",
    Description:
      "This is very cool and you should totally like this because it is cool",
  },
  {
    ImageUrl:
      "https://img.freepik.com/premium-vector/computer-display-monitor-realistic-3d-isolated_177006-195.jpg",
    Title: "Place Holder 2",
    Description:
      "This is very cool and you should totally like this because it is cool",
  },
  {
    ImageUrl:
      "https://i.pcmag.com/imagery/roundups/05ersXu1oMXozYJa66i9GEo-40..v1657319390.jpg",
    Title: "Place Holder 1",
    Description:
      "Description description description description description description description description description description",
  },
];

function App() {
  const [navBackground, setNavBackground] = useState("dark");
  const [navTheme, setNavTheme] = useState("dark");

  return (
    <div>
      <HeaderNav navBackground={navBackground} navTheme={navTheme} />
      <div
        style={sectionStyle}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1
          style={{
            fontSize: "72px",
            color: "white",
            textAlign: "center",
            textShadow: "2px 2px black",
            fontFamily: "Helvetica",
          }}
        >
          Vidyut Ramanan
        </h1>

        <h2
          style={{
            fontSize: "24px",
            color: "white",
            textAlign: "center",
            textShadow: "2px 2px black",
            fontFamily: "Helvetica",
          }}
          className="mb-5"
        >
          Full-Stack Software Engineer | Northeastern 2025
        </h2>

        <div className="d-flex justify-content-center ">
          <a
            href="https://www.linkedin.com/in/vidyutramanan/"
            className="icon-link icon-link-hover"
          >
            <Linkedin className="m-3" color="white" size={iconSize} />
          </a>
          <a href="https://github.com/vidyut-ramanan">
            <Github className="m-3" color="white" size={iconSize} />
          </a>
          <a href="mailto:vidyut.ramanan@northeastern.edu">
            <EnvelopeOpenFill className="m-3" color="white" size={iconSize} />
          </a>
        </div>
      </div>

      <div
        style={{ backgroundColor: "whitesmoke" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Card
          style={{ width: "50vw", marginTop: "70px", marginBottom: "70px" }}
        >
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <h1>About Me</h1>
            </Card.Title>

            <Card.Text className="p-3" style={{ fontSize: "16px" }}>
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
              Some stuff about me. Some stuff about me. Some stuff about me.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{ backgroundColor: "lightgray" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1 style={{ marginTop: "70px", marginBottom: "40px" }}>Projects</h1>
        <div
          style={{
            marginBottom: "70px",
            margin: "auto",
            justifyContent: "center",
          }}
          className="row "
        >
          {projects.map((item) => {
            return (
              <div
                style={{ justifyContent: "center" }}
                className="col-sm mb-3 d-flex"
              >
                <Card
                  style={{ width: "18rem" }}
                  className="h-100 d-flex flex-column "
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={item.ImageUrl}
                  ></Card.Img>
                  <Card.Body
                    className="flex-grow-1"
                    style={{ height: "12rem" }}
                  >
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>{item.Description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
