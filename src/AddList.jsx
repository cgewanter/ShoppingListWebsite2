import React, { Component } from 'react';
import './App.css';

class AddList extends Component {
  constructor(props) {
	super(props);
	this.state = { listId: "", listTitle: "",  categ: "", userId:""};
  }
  
  addList = () => {

	  console.log("adding list");
	  console.log(this.state);
		
	  fetch('http://localhost:8080/addlist', {
		    method: "POST",
            body: JSON.stringify(this.state),
			headers: {
				"Content-Type": "application/json",
			 }
		});
  }
  
  
  setListTitle = (e) => {
	  console.log(e);
	  this.setState({ listTitle: e.target.value });
	}
	
	setCateg = (e) => {
		console.log(e);
		this.setState({ categ: e.target.value});
	}

	setUserId = (e) => {
		console.log(e);
		this.setState({ userId: e.target.value});
	}

  
  render() {
	  return (
	  <React.Fragment>
		<p>Add a List:</p>

	    <input id="listTitle" value={this.state.listTitle} placeholder="List Title" onChange={this.setListTitle}/>
		<input id="listCateg" value={this.state.categ} placeholder = "Category" onChange={this.setCateg}/>
        <input id="userId" value={this.state.userId} placeholder = "User Id" onChange={this.setUserId}/>
        <button onClick={this.addList}>Add List</button>
	  </React.Fragment>
    	);
  }
}

export default AddList;
