import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>achievements </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
