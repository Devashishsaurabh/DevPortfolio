import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin"
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Medium from "@iconscout/react-unicons/icons/uil-medium-m";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>onlyvishwasindia@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Devashishsaurabh" target="_blank"><Linked color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/dev-ashish-saurabh/" target="_blank"><Gitub color="white" size={"3rem"} /></a>
          <a href="https://medium.com/@onlyvishwasindia" target="_blank"><Medium color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
