import React, { Component } from 'react';
import './App.css';
import cart from './cart2.jpg'

class AddList extends Component {
	constructor(props) {
		super(props);
		this.state = { listTitle: "" };
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
		)
	}

	setListTitle = (e) => {
		console.log(e);
		this.setState({ listTitle: e.target.value });
	}



	render() {
		return (
			<React.Fragment>
				<div className = 'addlist'>
				<p className = "addlisttitle">Add a List</p>

				<img src={cart}></img>
				<br></br>
				<br></br>
				<br></br>
				<input className = "newlistinput" id="listTitle" value={this.state.listTitle} placeholder="List Title" onChange={this.setListTitle} />

				<button onClick={this.addList}>Add List</button>

				</div>

			</React.Fragment >
		);
	}
}

export default AddList;
