import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'
import ManageList from './ManageList'

class ShowLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      listChoice: null,
      listName: null,
      change: false,
      error: false,
      resp: null
    };
  }

  componentDidMount() {
    console.log("This is componentDidMount() in show lists");
    console.log(this.state);
    try {
      this.getData();
    }
    catch (error) {
      return (<h1>Please login before viewing lists.</h1>)
    }
  }

  getData() {
    fetch('http://localhost:8080/showlists')
      .then((response) => {
        response.json().then((response) => {
          console.log(response);
          this.setState({ lists: response, error: false });
        })
      })
  }

  renderRedirect = () => {
    console.log("in renderRedirect");
    console.log(this.state);
    if (this.state.change) {
      return (<Redirect to=
        {
          {
            pathname: `lists/${this.state.listChoice}`,
            state: {
              listId: this.state.listChoice,
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

  getMap() {
    this.items = this.state.lists.map((item, key) =>
      <li key={item.listid}> {item.listtitle}</li>
    );
  }

  setList = (e) => {
    this.setState({ listChoice: e.target.value });
    var ln = this.state.lists.find(obj => {
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
      console.log("in pick list, here is state:");
      console.log(this.state);
      var choice = this.state.listChoice;
      console.log("choice: " + choice);
      if (this.state.listChoice != null) {
        console.log("in if");

        var theList = this.state.lists.find(obj => {
          return obj.listId == this.state.listChoice
        });

        console.log(this.state);
        console.log("this is lists in pickList():");
        console.log(this.state.lists);
        console.log("this is the found object");
        console.log(theList);
      }
    }
  }

  onClickListChoice = (item) => {
    console.log("in onClickListChoice");
    console.log(item);
    this.setState({ listChoice: item.listId, listName: item.listTitle, change: true });

    console.log(this.state);
  }

  render() {
    console.log("in render showlists");
    console.log("cookie");
    console.log(document.cookie.toString());


    if (this.state.lists.length >= 1) {
      return (
        <React.Fragment>
          {this.renderRedirect()}


          <div className="showlists">
            <h2 className="showlistsTitle">My Shopping Lists</h2>
            Click on a list to view:
              <h3>To add a new list, click the "New List" link on the menu bar.</h3>
            <div className="listContainer">
              <ul className="showlists">
                {
                  this.state.lists.map((item) =>
                    <li key={item.listId}>
                      <button className="listsButton"
                        onClick={() => { this.onClickListChoice(item); }}
                        key={item.listTitle}>
                        {item.listTitle}
                      </button>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>


          <br /> <br />
          {this.pickList()}
        </React.Fragment>
      );

    }
    else {
      return (
        <div>
          <h4>You will be unable to view your lists if you are not logged in.</h4>
          <h5>If you are logged in but do not have lists yet, click on the New List link above.</h5>
        </div>
      );
    }
  }

}

export default ShowLists;
