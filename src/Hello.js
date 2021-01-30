import React, { Component } from 'react';
import './Hello.css';
import logo from './logo.svg';
import './App.css';
import 'tachyons';

class Hello extends Component{
    render() {
        return (
        <div class='f1 tc'>
            <h1>Hello</h1>
            <p>welcome to reactjs</p>
        </div>
        );
    }
}

export default Hello;