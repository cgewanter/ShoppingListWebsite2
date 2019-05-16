import React, { Component } from 'react';
import './App.css';

class Page2 extends Component {
  constructor(props) {
	super(props);
	this.state = { listItems:[]}
  };
  
  getList= (itemsArray) => {
	 this.setState({listItems: itemsArray});
 }
	
  componentDidMount() {
	  console.log("This is page 2.");
	  const getList = this.getList;
	  fetch('http://localhost:8080/items')
	  .then(
		function(response) {
		  response.json().then(function(data) {
				getList(data);
				data.forEach(listItem => console.log(listItem));
		  });
		}
	  );
  } 
  
  render() {
	  console.log("rending", this.state);
    return (
      <div className="App">
			<p>
				Page 2: My Shopping Lists
			</p>

	  	{			
			this.state.items.map(item =>
													 (<li key = {item.itemId}>
														{item.name}
													</li>))
		  }
      </div>
    );
  }
}

export default Page2;
