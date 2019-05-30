import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import ManageList from './ManageList'



class ShowLists extends Component {
  constructor(props) {
    super(props);
    this.state = { 
                   lists: null, 
                   radioChoice: null,
                  listChoice: null, 
                  listName: null, 
                  change: false, 
                  shopList: null };
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    console.log("in renderRedirect");
    if (this.state.change) {
      return (<Redirect to={
         { 
           pathname :`lists/${this.state.listChoice}`,
           state: {listId: this.state.listChoice,
                  listName: this.state.listName,
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
    this.getData();
    
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
    var ln = this.state.lists.find(obj =>{
      return obj.listTitle == this.state.listName
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

  onClickFunction = (e) =>{
    console.log("in onClickFunction");
    console.log(e);
    this.setState({ listChoice: e.listId});
    this.setState({listName: e.listTitle});
   
    console.log(this.state);
    this.setState({change: true});

  }

  render() {
    console.log("in render showlists");
    console.log("cookie");
    console.log(document.cookie.toString());

    return (
      <React.Fragment>
        {this.renderRedirect()}
        <div className = "showlists">
          <h2 className="showlistsTitle">My Shopping Lists</h2>
            Click on a list to view:
            <h3>To add a new list, click the "New List" link on the menu bar.</h3>
            <ul className="showlists">
              {
                this.state.lists ?
                  this.state.lists.map((item) =>
                    <li key={item.listId}>
                      <button className = "listsButton"
                          onClick={()=> {this.onClickFunction(item);}} 
                          key={item.listTitle}>
                            {item.listTitle}
                        </button>   
                    </li>
                  )
                  :
                  <h3>Data loading...</h3>
              }
            </ul>
     
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
//{item.listTitle} ({item.listId}
//<a href={`http://localhost:8080/lists/${item.listId}`}> {item.listTitle}</a>
/* 
<label>
<input
  type="radio"
  name= {this.listTitle}
  value="listchoice"
  checked= "false"
></input>
 {item.listTitle} 
</label> */