import React from 'react';
import {  Route, Switch} from 'react-router-dom';
import Home from './home.js';
import Sphonx from './Sphonx.js';
import Travels from './Travels.js';
import Experience from './Experience.js';

// this method is used to set the routing for every link in the site
function App() {
    return (
        <main>
            <Switch>
                {/* This is where we declare every route. We make the actual links in NavBar.js */}
                <Route exact path='/' component = {Home} />
                <Route path='/sphonx' component={Sphonx}/>
                <Route path='/travels' component={Travels}/>
                <Route path='/experience' component={Experience}/>
            </Switch>
        </main>
    )
}

export default App;