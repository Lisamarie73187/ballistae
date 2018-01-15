import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Home/Blog';
import AboutUs from './components/Home/AboutUs';
import Admin from './components/admin/AdminHome';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/> 
        <Route path="/blog" component={ Blog }/> 
        <Route path="/about" component={ AboutUs }/> 
        <Route path="/admin" component={ Admin }/> 
    </Switch>
)
