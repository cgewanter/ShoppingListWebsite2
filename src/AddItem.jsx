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
			quantity: null,
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
	/* setItems = () => {
		console.log("in setItems(), before if ")
		if (this.state.ready ==true) {
			console.log('in set items, state: ', this.state);
			this.setState({
				food:
				{
					foodId: this.state.foodId,
					foodname: this.state.foodName,
					size: this.state.size,
					quantity: this.state.qty
				}
			});
			this.setState((ready) => {
				return { ready: true }
			});
		}
	} */

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
			{this.refresh()}
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

		/*<input id="foodname" placeholder="Food Name" onChange={this.setFoodname} />
				<input id="quantity" value={this.state.quantity} placeholder="Qty" onChange={this.setId} />
				<input id="size" value={this.state.size} placeholder="Size" onChange={this.setId} />
				<input id="notes" value={this.state.notes} placeholder="Notes" onChange={this.setNotes} />

				<button onClick={this.addItem}>Add Item</button>

===========================================
				Item  &nbsp;
					<select form="newitem" name="pickfood">
						<option value ="choose">Choose an item</option>
						<option value="apple">Apple</option>
						<option value="orange">Orange</option>
						<option value="cherries">Cherries</option>
					</select>
					&nbsp;&nbsp;&nbsp;
					
					Qty &nbsp; 
					<select form="newitem">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					&nbsp; &nbsp;&nbsp;
					Size &nbsp;
					<select form="newitem">
						<option value="None">None</option>
						<option value="Small">Small</option>
						<option value="Medium">Medium</option>
						<option value="Large">Large</option>

					</select>
============================================
		*/
	}
}

export default AddItem;
