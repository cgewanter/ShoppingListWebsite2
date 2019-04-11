import React, { Component } from 'react';
import './App.css';
import NewUser from './NewUser';

class Login extends Component {
  constructor(props) {
	super(props);
	this.state = {username: "", newUser: false}
  }
  
  
  setUsername =(un)=> {
    console.log("setting username");
    console.log(un);
    this.setState({username: un.target.value});
    console.log("username", this.state);
    fetch('http://localhost:8080/login', {
		  method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type": "application/json",
			 }
    });
}

  setNewUser=()=>{
      console.log("setting new user to true");
      this.setState({newUser: true});
  }

  newUser = () => {
      if (this.state.newUser===true){
        return(<NewUser/>);
        } 
  }


  render() {
	  return (
         
	  <React.Fragment>
			<p>Please login with your username:</p>
			<input id="username" value={this.state.username} placeholder ="Username" onChange={this.setUsername}/>
            <button onClick={this.setUsername}>Login</button>
            <div/>
            <button onClick={this.setNewUser}>New user?</button>
        {this.newUser()}
	  </React.Fragment>
		);
  }
}

export default Login;
