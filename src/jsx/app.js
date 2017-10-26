import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from "./Navbar";
import HomePage from "Pages/HomePage.js"
import AboutPage from "Pages/AboutPage.js"

ReactDOM.render((
    <BrowserRouter>
    <div>

    <Navbar/>

    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/about'  component={AboutPage}/>
    </Switch>

    </div>
    </BrowserRouter>

), document.getElementById('reactEntry'));

