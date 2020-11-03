import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='header'> 
         <h1 id='header-text'>Kyle Maxwell - Personal Portfolio</h1>
         <nav class="nav-links">
           {/* Here we create our links for the navbar. They use the switch made in App.js */}
           <Link class="link" to="/">Home</Link>
           <Link class="link" to="/sphonx">Meet my cat</Link>
           <Link class="link" to="/travels">Travels</Link>
         </nav>

        </div>
      </React.Fragment>
    );
  }
}
 
export default NavBar;