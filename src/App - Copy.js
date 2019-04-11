import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
	super(props);
	this.state = { cards: [] };
  }
	
  componentDidMount() {
	  this.setState({ cards: ["four", "five", "six"] });
	  fetch('http://localhost:8080/cards', {mode: "no-cors"})
	  .then(
		function(response) {
			console.log(response);
		  if (response.status !== 200) {
			console.log('Looks like there was a problem. Status Code: ' +
			  response.status);
			//return;
		  }

		  response.text().then(function(data) {
			console.log(data);
		  });
		}
	  );
  }
  
  render() {
    return (
      <div className="App">
	  {
		  this.state.cards.join(", ")
	  }
      </div>
    );
  }
}

export default App;
