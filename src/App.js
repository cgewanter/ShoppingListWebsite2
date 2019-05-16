import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem';
import Page2 from './Page2';
import Login from './Login';
import AddList from './AddList';
import ShowLists from './ShowLists';
import ManageList from './ManageList';

import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { currentPage: 3 };
	}


	content = () => {
		switch (this.state.currentPage) {
			case 1:
				return <AddItem />
			case 2:
				return <Page2 />
			case 3:
				return <Login />
			case 4:
				return <AddList />
			case 5:
				return <ShowLists />
			default:
				return <Login />
		}
	}

	buttons = () => {
		return (
			<React.Fragment>

				<p>Menu:</p>
				<button onClick={() => { this.setState({ currentPage: 3 }) }}>Login</button>
				<button onClick={() => { this.setState({ currentPage: 4 }) }}>Add a list</button>
				<button onClick={() => { this.setState({ currentPage: 1 }) }}>Add an item</button>
				<button onClick={() => { this.setState({ currentPage: 2 }) }}>See my items</button>
				<button onClick={() => { this.setState({ currentPage: 5 }) }}>See my lists</button>
			</React.Fragment>
		)
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
						<Route path="/lists" component={ManageList} />
						<Route path ="/" exact component={Home}/>
					</Switch>
					<br></br>
					<br/>
				</div>
			</Router>
		

			/* 	<React.Fragment>
					{this.buttons()}
					{this.content()}		
		
			</React.Fragment> */
		);
	}
}

export default App;
