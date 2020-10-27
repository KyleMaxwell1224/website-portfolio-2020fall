import React, { Component } from "react";
import {Link } from "react-router-dom";

class Footer extends Component {
    render() {
      return (
        <React.Fragment>
         <div className="footer">
            <p className="footer-text">Professional Links:</p>
            <a class="social-icons" href="https://www.linkedin.com/in/kyle-maxwell-a0b101161/">LinkedIn</a>
            <a class="social-icons" href="http://www.kyleericmaxwell.com/">Resume</a>
            <a class="social-icons" href="https://github.com/KyleMaxwell1224">GitHub</a>
         </div>
        </React.Fragment>
      );
    }
  }
  
  export default Footer;