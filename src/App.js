import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import AddList from './AddList';
import ShowLists from './ShowLists';
import ManageList from './ManageList';
import Logout from './Logout';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<Router>
				<div className = "App">
					<Nav/>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/addlist" component={AddList} />
						<Route path="/showlists" component={ShowLists} />
						<Route  path = "/lists/:listId" component={ManageList} />
						<Route path ="/" exact component={Home}/>
						<Route path = "/logout" component = {Logout}/>
					</Switch>
					<br></br>
					<br/>
				</div>
			</Router>
		);
	}
}

export default App;
