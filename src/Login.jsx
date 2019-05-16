import React, { Component } from 'react';
import './App.css';
import NewUser from './NewUser';
import ShowLists from './ShowLists'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", newUser: false, loggedIn: false }
  }


  setUsername = (un) => {
    console.log("setting username");
    console.log(un);
    this.setState({ username: un.target.value });
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

      //this.setState({currentPage: 5})
      console.log("current state:");
      console.log(this.state);
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

  /* nextPage = () => {
    switch(this.state.currentPage){
			case 1:
			return <Page1/>
			case 2:
			return <Page2/>
			case 3:
			return <Login/>
			case 4:
			return <AddList/>
			case 5:
			return <ShowLists/>
			default:
			return <Login/>
		}
  } */


  render() {
    return (

      <React.Fragment>

        <p className="titles">Login</p>
        <div className="login">
          <input id="username" value={this.state.username} placeholder="Username" onChange={this.setUsername}></input>
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
