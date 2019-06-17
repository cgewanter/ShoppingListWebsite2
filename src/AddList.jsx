import React, { Component } from 'react';
import './App.css';
import ShowLists from './ShowLists';
import { Redirect } from 'react-router-dom'
import cart from './cart2.jpg'

class AddList extends Component {
	constructor(props) {
		super(props);
		this.state = { listTitle: "" , newList: false};
	}

	addList = () => {
		console.log("adding list");
		console.log(this.state);

		fetch('http://localhost:8080/addlist', {
			method: "POST",
			mode: "no-cors",
			body: this.state.listTitle,
			headers: {
				"Content-Type": "application/json",
			}
		}
		);
		this.setState({newList: true}, ()=> console.log(this.state));
		console.log("updated new list");
	}
	setListTitle = (e) => {
		console.log(e);
		this.setState({ listTitle: e.target.value });
	}

	showLists = () =>{
		console.log("in showLists mehtod");
		if (this.state.newList ===true){
			console.log("in if");
			return(<Redirect to={ {pathname: '../showlists'}}/>);	
			}
	}

	render() {
		return (
			<React.Fragment>
				<div className = 'addlist'>
				<p className = "addlisttitle">Add a List</p>

				<img src={cart} alt=""></img>
				<br></br>
				<br></br>
				<br></br>
				<input className = "newlistinput" id="listTitle" value={this.state.listTitle} placeholder="List Title" onChange={this.setListTitle} />

				<button onClick={this.addList}>Add List</button>
				{this.showLists()}
				</div>
			</React.Fragment >
		);
	}
}

export default AddList;
