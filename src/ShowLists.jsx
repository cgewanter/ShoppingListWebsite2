import React, { Component } from 'react';
import './App.css';

class ShowLists extends Component {
  constructor(props) {
	super(props);
	this.state = { lists:[], userId:""}
  };
  
  getLists= (listsArray) => {
	 this.setState({lists: listsArray});
 }

  setUserId=(uid)=>{
    console.log(uid);
    this.setState({userId: uid.target.value} )
  }
    
  myLists = () =>{
      return (
    <React.Fragment>
                {this.state.lists.map(list =>
                                            (<li key = {list.listId}>
                                                    {list.listTitle}
                                            </li>))
                 }
                        );
      </React.Fragment>      
      );                            
  }

  componentDidMount() {
	  console.log("This is show lists");
	  const getLists = this.getLists;
	  fetch('http://localhost:8080/showlists')
	  .then(
		function(response) {
		  response.json().then(function(data) {
				getLists(data);
				data.forEach(list => console.log(list));
		  });
		}
	  );
  } 
  
  render() {
    return (
     <React.Fragment>
        <div className="App">
			<p>Page 2: My Shopping Lists</p>
            <input id ="userid" value={this.state.userId} placeholder = "User id" onChange={this.setUserId}/>
            {this.state.lists.map(list =>
                                            (<li key = {list.listId}>
                                                    {list.listTitle}
                                            </li>))
                 }
        </div>
      </React.Fragment>
    );
  }
}

export default ShowLists;
