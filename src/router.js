import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Home/Blog';
import BlogOne from './components/Home/BlogOne';
import AboutUs from './components/Home/AboutUs';
import Admin from './components/admin/AdminHome';
import Shop from './components/Home/Shop';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/> 
        <Route path="/blog" component={ Blog }/> 
        <Route path="/blogone" component={ BlogOne }/> 
        <Route path="/about" component={ AboutUs }/> 
        <Route path="/admin" component={ Admin }/> 
        <Route path="/shop" component={ Shop }/> 
    </Switch>
)
