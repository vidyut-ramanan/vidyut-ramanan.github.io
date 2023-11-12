import HeaderNav from "./HeaderNav";
import backgroundImage from "./background.png";
import { EnvelopeOpenFill, Github, Linkedin } from "react-bootstrap-icons";

var sectionStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  height: "100vh",
};

const iconSize = "45";

function App() {
  return (
    <div>
      <HeaderNav />
      <div
        style={sectionStyle}
        className="d-flex flex-column justify-content-center"
      >
        <div className="alight-items-center"></div>
        <div className="d-flex justify-content-center">
          <h1 style={{ fontSize: "7vw", color: "white" }}>Vidyut Ramanan</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h2 style={{ fontSize: "2vw", color: "white" }} className="mb-5">
            Full-Stack Software Engineer | Northeastern 2025
          </h2>
        </div>
        <div className="d-flex justify-content-center ">
          <a href="https://www.linkedin.com/in/vidyutramanan/">
            {" "}
            <Linkedin className="m-3" color="white" size={iconSize} />
            <Github className="m-3" color="white" size={iconSize} />
            <EnvelopeOpenFill className="m-3" color="white" size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
