import React, { Component } from 'react';
import './App.css';
import cart from './cart3.jpg';




class Home extends Component {

  
  render() {
    return (
          <div className = "home"> 
              <h1>Welcome to the Shopping Site!</h1>
              <h3>Please sign in to begin.</h3>
              <img src = {cart}></img>
          </div>
      );
    }
}
export default Home;
