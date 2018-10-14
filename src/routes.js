import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboad from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';


export default (
    <Switch>
        <Route component={Auth} exact path= "/"></Route>
        <Route component={Dashboad} path="/dashboard"></Route>
        <Route component={Form} path="/new"></Route>
        <Route component={Post} path="/post/:postid"></Route>
    </Switch>
)

