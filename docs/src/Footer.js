import React, { Component } from "react";

class Footer extends Component {
    render() {
      return (
        <React.Fragment>
         <div className="footer">
         <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <p className="footer-text">Professional Links:</p>
            <div className="nav-links">
              <a className="social-icons" href="https://www.linkedin.com/in/kyle-maxwell-a0b101161/">LinkedIn</a>
              <a className="social-icons" href="http://www.kyleericmaxwell.com/">Resume</a>
              <a className="social-icons" href="https://github.com/KyleMaxwell1224">GitHub</a>
            </div>
         </div>
        </React.Fragment>
      );
    }
  }
  
  export default Footer;