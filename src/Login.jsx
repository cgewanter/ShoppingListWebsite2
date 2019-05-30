import React, { Component } from 'react';
import './App.css';
import NewUser from './NewUser';
import ShowLists from './ShowLists'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", newUser: false, loggedIn: false }
  }

  changeUsername = (un) => {
    this.setState({username: un.target.value});
  }


  setUsername = (un) => {
    console.log("username", this.state);
    fetch('http://localhost:8080/login', {
      method: "POST",
      mode: "no-cors",
      body: this.state.username,
      headers: {
        "Content-Type": "application/json",
      }
    }
    )
    if (this.state.username !== "") {
      console.log("in if, setting loggedIn to true");
      this.setState({ loggedIn: true });
      console.log("current state:");
      console.log(this.state);
      console.log("cookie:");
      console.log(document.cookie);
      return (<ShowLists />);
    }
    else return (<div> Error! </div>)
  }
  setNewUser = () => {
    console.log("setting new user to true");
    this.setState({ newUser: true });
    this.changePage()
  }

  newUser = () => {
    if (this.state.newUser === true) {
      return (<NewUser />);
    }
  }

  changePage = () => {
    if (this.state.loggedIn === true) {
      return (<p>Welcome! You are logged in.</p>);
    }
  }

  render() {

    return (

      <React.Fragment>

        <p className="titles">Login</p>
        <div className="login">
          <input id="username" value={this.state.username} placeholder="Username" onChange={this.changeUsername}></input>
          <button onClick={this.setUsername}>Login</button>
          <br />
          <br />
          <div />

          <button onClick={this.setNewUser}>New user?</button>
          <br />
          <br />
          {this.newUser()}
          {this.changePage()}

        </div>

      </React.Fragment>
    );
  }
}

export default Login;
