import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(props) {
	super(props);
	this.state = {username: ""};
  }
  
  
  render() {
	  return (
	  <React.Fragment>
			<p>Please Login with your username:</p>
			<input id="itemId" value={this.state.itemId} placeholder ="Item ID" onChange={this.setId}/>
	  </React.Fragment>
		);
	
  }
}

export default Page3;
