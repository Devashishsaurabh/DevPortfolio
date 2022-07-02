import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <spane style={{fontWeight:"700",fontFamily:"sans-serif",fontSize:"18px"}}>
        Frontend Developer with high level of experience in web designing
            
          <br />
          and development,producting the Quality work.
          <br/> 
          <br/>
          In-depth knowledge of Data Structure & Algorithms, Html, JavaScript,<br/> MongoDB, Mern, and Node.js. 
          <br/>
          Hardworking collaborator with a track record of superior results. 
        </spane>
        <a href={Resume} download>
          <button className="button s-button" style={{width:"fit-content"}}>Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
      <motion.div
          initial={{ left: "27rem" }}
          whileInView={{ left: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Photoshop, CorelDraw"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "8rem", top: "8rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React, Nodejs, Express, MongoDB, Git, Redux, ChakraUI"}
          />
        </motion.div>
        
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
