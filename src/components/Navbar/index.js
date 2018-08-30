import React, { Component } from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <NavLink to="/monster/1">Monster</NavLink>
                    <NavLink to="/">Main page</NavLink>
                </div>
            </BrowserRouter>
        )
    }
}