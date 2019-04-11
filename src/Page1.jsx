import React, { Component } from 'react';
import './App.css';

class Page1 extends Component {
  constructor(props) {
	super(props);
	this.state = { listItemId: "", foodId: "",  listId: "", quantity: "", size: "", items: []};
  }
  
  addItem = () => {

	  console.log("adding item");
		console.log(this.state);
		console.log(this.state.items.join());
		this.state.items.push(this.state.name);
	  fetch('http://localhost:8080/items', {
		  method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type": "application/json",
			 }
		});
  }
  
  setId = (e) => {
	  console.log(e);
	  this.setState({ listItemId: e.target.value });
  }
  
  setFoodId = (e) => {
	  console.log(e);
	  this.setState({ foodId: e.target.value });
	}
	
	setListId = (e) => {
		console.log(e);
		this.setState({ listId: e.target.value});
	}

	setQuantity = (e) => {
		console.log(e);
		this.setState({ quantity: e.target.value});
	}

	setSize = (e) => {
		console.log(e);
		this.setState({ size: e.target.value});
	}
  
  render() {
	  return (
	  <React.Fragment>
			<p>Add an Item:</p>
	  <input id="itemId" value={this.state.itemId} placeholder ="Item ID" onChange={this.setId}/>
	  <input id="foodId" value={this.state.foodid} placeholder="Food ID" onChange={this.setName}/>
		<input id="listId" value={this.state.listid} placeholder = "List ID" onChange={this.setCateg}/>
		<input id="quantity" value={this.state.quantity} placeholder ="Qty" onChange={this.setId}/>
		<input id="size" value={this.state.size} placeholder ="Size" onChange={this.setId}/>
		<button onClick={this.addItem}>Add Item</button>
	  </React.Fragment>
		);
	
  }
}

export default Page1;
