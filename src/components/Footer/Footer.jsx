import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin"
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Medium from "@iconscout/react-unicons/icons/uil-medium-m";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>onlyvishwasindia@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Devashishsaurabh" target="_blank"><Gitub color="Black" size={"3rem"} /></a>
          <a href="https://www.instagram.com/devashish_saurabh_official" target="_blank"><Insta color="#cb3e7a" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/dev-ashish-saurabh/" target="_blank"><Linked color="#0077b5 " size={"3rem"} /></a>
          <a href="https://medium.com/@onlyvishwasindia" target="_blank"><Medium color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
