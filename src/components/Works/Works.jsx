import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works On This Website
          </span>
          <span>Clone</span>
          <spane style={{fontWeight:"700",fontFamily:"sans-serif",fontSize:"18px"}}>
           All the Website are having Full Functionality
           <br/>
           This Website are Clone with Contributors.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img width="370px"src="https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/5fa00a8f29cc626bc128f080/webp/logo-for-website-480x480.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img width="370px"src="https://camo.githubusercontent.com/f5734ab1f9a2899185757db0624611f4bc3a3baa559833134f46cfef9f0baec2/68747470733a2f2f696d616765732e6374666173736574732e6e65742f77746f646c683437717870742f323546535946754574476374384e537274704b6536642f62363032663666653062663239346536613664666635643736343862663539342f4b46435f4c6f676f2e737667" alt="" />
          </div>
          <div className="w-secCircle">
            <img width="150px"src="https://camo.githubusercontent.com/356e03fa92213fc2da40d28b9cc64ae191c16cc81d518ad3b683aa42db828ee8/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a79745273586e6a5549646276796379655a5a673668412e706e67" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img width="150px"src="https://upload.wikimedia.org/wikipedia/commons/1/13/YOUTUBE_LOGO.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img width="140px"src="https://camo.githubusercontent.com/3ffeeb909e0da9579263d2243605cc7b1fecff9fb3f686bffb7dc002c39120d7/68747470733a2f2f692e696d6775722e636f6d2f3141324834376c2e706e67" alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
