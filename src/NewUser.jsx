import React, { Component } from 'react';
import './App.css';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: "", lastname: "", username: "" };
  }

  setFirstname = (e) => {
    this.setState({ firstname: e.target.value });
  }

  setLastname = (e) => {
    this.setState({ lastname: e.target.value });
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  sendNewUser = () => {
    console.log("adding user");
    console.log(this.state);
    fetch('http://localhost:8080/newuser', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }


  render() {
    return (
      <React.Fragment>
        <p>Please enter the following information:</p>
        <p>Then login to continue.</p>
        <input id="firstname" value={this.state.firstname} placeholder="firstname"
          onChange={this.setFirstname} />
        <input id="lastname" value={this.state.lastname} placeholder="lastname"
          onChange={this.setLastname} />
        <input id="username" value={this.state.username} placeholder="username"
          onChange={this.setUsername} />
        <button onClick={this.sendNewUser}>Enter</button>
      </React.Fragment>
    );
  }
}
export default NewUser;
