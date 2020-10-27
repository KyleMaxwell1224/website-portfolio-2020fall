import React, { Component } from "react";
import Sphonx from './Sphonx.js'
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id='header'> 
         <h1 id='header-text'>Kyle Maxwell: Personal Portfolio</h1>
         <nav id="nav-links">
           <Link class="link" to="/">Home</Link>
           <Link class="link" to="/sphonx">Meet my cat</Link>
           <Link class="link" to="/best_movies">Top movies</Link>
         </nav>
        </div>
      </React.Fragment>
    );
  }
}
 
export default NavBar;