import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './home.js';
import Sphonx from './Sphonx.js';
import Movies from './Movies.js';
// this method is used to set the routing for every link in the site
function App() {
    return (
        <main>
            <Switch>
                <Route path='/' component = {Home} exact/>
                <Route path='/sphonx' component={Sphonx}/>
                <Route path='/best_movies' component={Movies}/>
            </Switch>
        </main>
    )
}

export default App;