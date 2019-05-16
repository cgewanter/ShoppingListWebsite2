import React, { Component } from 'react';
import './App.css';
//import ManageList from './ManageList';
import { Redirect } from 'react-router-dom'
//import { timeout } from 'q';
//import cookie from 'react-cookie';


class ShowLists extends Component {
  constructor(props) {
    super(props);
    this.state = { lists: null, listChoice: null, listname: null, change: false, shopList: null };
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.change) {
      return (<Redirect to={
         { 
           pathname :'lists/',
           state: {listId: this.state.listChoice,
                  listName: this.state.listname,
                  lists: this.state.lists
              }
    
        }
      }
        />)
    }
  }

  getLists = (listsArray) => {
    console.log("in getLists() method of jsx.")
    this.setState({ lists: listsArray });
    console.log("after set state to the array: the state is:")
    console.log(this.state);
  }


  myLists = () => {
    return (
      <React.Fragment>
        {this.state.lists.map(list =>
          (<li key={list.listId}>
            {list.listTitle}
          </li>))
        }
        );
      </React.Fragment>
    );
  }

  componentDidMount() {
    console.log("This is componentDidMount() in show lists");
    console.log(this.state);
    // cookie.load();
    this.getData();
    /* fetch('http://localhost:8080/showlists')
      .then(
        (response) => {
          response.json().then(
            (data) => { this.setState({ lists: data }) }
          )
        }
      );
      console.log("after .then")
      console.log(this.state);
    this.getMap(); */
  }

  getData() {
    fetch('http://localhost:8080/showlists')
      .then((response) => {
        response.json().then((response) => {
          console.log(response)
          this.setState({ lists: response })
        })
      })
  }


  getMap() {
    this.items = this.state.lists.map((item, key) =>
      <li key={item.listid}> {item.listtitle}</li>
    );
  }

  setList = (e) => {
    this.setState({ listChoice: e.target.value});
    var listName = this.state.lists.find(obj =>{
      return obj.listTitle == this.state.listname
  });
    console.log("in set list");
    console.log(this.state);
    this.pickList();
  }

  finalSetList = () => {
    console.log("in finalsetlist")
    this.setState({ change: true });
  }

  pickList = () => {
    if (this.state.change) {
      console.log("in pick list, here is state:")
      console.log(this.state);
      var choice = this.state.listChoice;
      console.log("choice: " + choice);
      //this.setState({redirect: true});
      if (this.state.listChoice != null) {
        console.log("in if");


        var theList = this.state.lists.find(obj => {
          return  obj.listId == this.state.listChoice
        });
       

        console.log(this.state);
        console.log("this is lists in pickList():");
        console.log(this.state.lists);
        console.log("this is the found object");
        console.log(theList);

       // return (<ManageList list={theList} />);
      }
    }
  }
  render() {
    console.log("in render showlists");

    return (
      
      <React.Fragment>
        {this.renderRedirect()}
        <div>
          <h2 className="showlistsTitle">My Shopping Lists</h2>
          <ul className="showlists">
            {
              this.state.lists ?
                this.state.lists.map((item) =>
                  <li key={item.listId}>
                    {item.listTitle} ({item.listId})
                  </li>
                )
                :
                <h3>Data loading...</h3>
            }
          </ul>
        </div>

        <div>
          <h5>Enter List number to view:</h5>
          <input id="listchoice"
            placeholder="List number"
            onChange={this.setList}>
          </input>
          <button onClick={this.finalSetList}>View List</button>
        </div>
        <br /> <br />
        {this.pickList()}
      </React.Fragment>
    );
  }
}

export default ShowLists;
//{this.renderRedirect()} goes before ending div

//<a href = {this.setList(item.listId)}>  </a>
//<a href={`http://localhost:8080/lists/${item.listId}`}> Edit