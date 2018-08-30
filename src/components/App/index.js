import React, { Component } from 'react';
import Navbar from '../Navbar';
import Routing__configuration from '../Routing__configuration';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Routing__configuration />
        {/* <Navbar /> */}
        <a href="https://www.vecteezy.com">Vector Illustration by www.Vecteezy.com</a>
      </div>
      
    );
  }
}

export default App;
