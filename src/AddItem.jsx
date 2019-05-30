import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';
import ManageList from './ManageList'

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemId: null,
			foodId: null,
			listId: null,
			quantity: 1,
			notes: "",
			size: null,
			foodName: null,		
		};
	}
	componentDidMount() {
		console.log("This is componentDidMount() in show lists");
		console.log(this.state);
		// cookie.load();
	}

	addItem = () => {
		console.log("in addItem() before if ")
		//this.setFood();
		//this.setItems();
		if (this.state.foodId != null) {
			console.log('in if of  addItem(), state:', this.state);
			console.log("adding item");
			console.log(this.state.food);
			//this.state.items.push(this.state.foodname);
			fetch('http://localhost:8080/additem', {
				method: "POST",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type": "application/json",
				}
			});
		}
		else {
			return <p>Adding...</p>
		}
	}
	setItem = (e) => {
		this.setState({foodName: e.target.value})
		}

	setListId = (e) => {
		console.log(e);
		this.setState({ listId: e.target.value });
	}

	//setFoodName = (e) => this.setState({foodName: e.label});
	setFoodId = (e) => this.setState({foodId:  e.value});
	setSize = (e) => this.setState({size: e.label});
	setQuantity = (e) => this.setState({quantity: e.label})

	refresh(){
		console.log("in refresh");
		return (<ManageList/>)
	}

	render() {
		//this.addItem();
		console.log("in render state and props");
		console.log(this.state);
		console.log(this.props);
		return (
			<React.Fragment>
				<div className="addItem">
					<h4 className="additemtitle">Add an Item:</h4>
					Item
					<Select
						className="select" onChange={this.setFoodId}
						options={
							this.props.foodItems ?
								this.props.foodItems :
								[
									{label: "Loading...", value: "loading..."}
								]
						}
					/>

					Qty
					<Select
						className="select" onChange={this.setQuantity}
						options={
							[
								{ label: "1", value: "one" },
								{ label: "2", value: "two" },
								{ label: "3", value: "three" },
								{ label: "4", value: "four" },
								{ label: "5", value: "five" },
								{ label: "6", value: "six" },
								{ label: "7", value: "seven" },
								{ label: "8", value: "eight" },
								{ label: "9", value: "nine" },
								{ label: "10", value: "ten" }
							]
						} />

					Size
					<Select
						className="select" onChange={this.setSize}
						options={
							[
								{ label: "none", value: " none" },
								{ label: "Small", value: "small" },
								{ label: "Medium", value: "medium" },
								{ label: "Large", value: "large" }
							]
						}
					/>
					<br/>
					<button className="addItemButton" onClick={this.addItem}>
						Add
					</button>
					<br />
					<br />
				</div>
			</React.Fragment>
		);


	}
}

export default AddItem;
