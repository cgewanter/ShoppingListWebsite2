import React, { Component } from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Login from './Login';
import AddList from './AddList';
import ShowLists from './ShowLists';

class App extends Component {
  constructor(props) {
	super(props);
	this.state = { currentPage: 3 };
	}
	
	
	content = () =>{
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
	}

	buttons =()=>{
		return(
		<React.Fragment>
			<p>Menu:</p>
			<button onClick={() => { this.setState({ currentPage: 3})}}>Login</button>
			<button onClick={() => { this.setState({ currentPage: 4})}}>Add a list</button>
			<button onClick={() => { this.setState({ currentPage: 1})}}>Add an item</button>
	  	<button onClick={() => { this.setState({ currentPage: 2})}}>See my items</button>
			<button onClick={() => { this.setState({ currentPage: 5})}}>See my lists</button>
		</React.Fragment>
		)
	}

  render() {
		
    return (
	<React.Fragment>
		{this.content()}
		{this.buttons()}

	</React.Fragment>
    );
  }
}

export default App;
