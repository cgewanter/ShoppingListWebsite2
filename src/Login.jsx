import React, { Component } from 'react';
import './App.css';
import NewUser from './NewUser';
import ShowLists from './ShowLists'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", newUser: false, loggedIn: false, response: null }
  }

  changeUsername = (un) => {
    this.setState({ username: un.target.value });
  }

  performLogin = (e) => {
    console.log("username", this.state);
    if (this.state.username !== "") {
      fetch('http://localhost:8080/processlogin', {
        method: "POST",
        mode: "no-cors",
        body: this.state.username,
        headers: {
          "Content-Type": "application/json",
        }
      }
      ).then((r) => this.setState({ response: r }));

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
    this.displayLoginMsg();
  }

  newUser = () => {
    if (this.state.newUser === true) {
      return (<NewUser />);
    }
  }

  displayLoginMsg = () => {
    if (this.state.response == null) {
      return <p>:-)</p>;
    }
    else if (this.state.response.ok) {
      console.log(this.state);
      console.log("in if response is ok");
      this.setState({ loggedIn: true });
      return (<div><p>Welcome</p> <p>{this.state.username.toUpperCase}</p> <p> You are logged in.</p></div>);
    }
    else {
      console.log("In else of dpsly login msg");
      return (<p>Sorry, invalid login.</p>)
    }
  }

  showUsersLists = () => {
    if (this.state.loggedIn === true) {
      return (<Redirect to=
        {{
          pathname: '../showlists',
          state: { loggedIn: true }
        }
        } />);
    }
  }

  render() {

    return (
      <React.Fragment>
        <p className="titles">Login</p>
        <div className="login">
          <input id="username" value={this.state.username} placeholder="Username" onChange={this.changeUsername}></input>
          <button onClick={this.performLogin}>Login</button>
          <br />
          <br />

          <button onClick={this.setNewUser}>New user?</button>
          <br />
          <br />
          {this.newUser()}
          {this.displayLoginMsg()}
          {this.showUsersLists()}
        </div>

      </React.Fragment>
    );
  }
}

export default Login;
