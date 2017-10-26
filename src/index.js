import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SwiperNavbar from "./jsx/components/SwiperNavbar.js"
import HomePage  from "./jsx/pages/HomePage"
import AboutPage from "./jsx/pages/AboutPage"
import LoginPage from "./jsx/pages/LoginPage"
import RegisterPage from "./jsx/pages/RegisterPage"

ReactDOM.render((
    <BrowserRouter>
        <div className="App">

            <SwiperNavbar/>

            <Switch>
                <Route exact path='/'   component={RegisterPage}/>

                <Route path='/home'     component={HomePage}/>
                <Route path='/about'    component={AboutPage}/>
                <Route path='/login'    component={LoginPage}/>
                <Route path='/register' component={RegisterPage}/>
            </Switch>

        </div>
    </BrowserRouter>

), document.getElementById('root'));

registerServiceWorker();
