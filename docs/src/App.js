import React from 'react';
import {  Route, Switch,  Redirect} from 'react-router-dom';
import Home from './home.js';
import Sphonx from './Sphonx.js';
import Movies from './Movies.js';
// this method is used to set the routing for every link in the site
function App() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route path='/sphonx' component={Sphonx}/>
                <Route path='/best_movies' component={Movies}/>
                <Redirect to="/" />
            </Switch>
        </main>
    )
}

export default App;