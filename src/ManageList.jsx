import React, { Component } from 'react';
import './App.css';
import ShowLists from './ShowLists';
import AddItem from './AddItem';
import { Redirect } from 'react-router-dom'


class ManageList extends Component {
  constructor(props) {
    super(props);
    this.state = { mapItems: null, itemsList: null, listProp: null, foodItems: null, deleteList: false };
  }


  componentDidMount() {
    console.log("This is componentDidMount() in manage list. state and props");
    this.setState({ listProp: this.props.listId });

    console.log(this.state);
    console.log(this.props.result);
    // cookie.load();
    this.getData();
  }


  getData() {
    console.log("this is getData() of manageList. Props:");
    console.log(this.props);
    console.log("fetch statement now.");
    fetch(`http://localhost:8080/lists/${this.props.location.state.listId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
      .then((response) => {
        response.json().then((response) => {
          console.log("response");
          console.log(response);
          this.setState({ itemsList: response });
        })
      })
    console.log(this.state);
  }

  startDeleteList() {
    console.log("in start delete list");
    this.setState({ deleteList: true });
    this.deleteList();
    return (<div>The list has been deleted</div>)
  }

  deleteList() {
    console.log("this is deleteList of managelist.")
    if (this.props != null) {
      console.log("in if");
      fetch(`http://localhost:8080/lists/${this.props.location.state.listId}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      this.setState({ deleteList: true });
      console.log("deleted list");
    }
  }

  showAddItem = () => {
    if (this.state.foodItems != null) {

      return (<AddItem foodItems={this.state.foodItems} refreshItems={this.getData} />);
    }
    else { console.log("fooditems is null in showAdditme") }
  }

  getFoodList() {
    console.log("in getFoodList()");
    if (this.state.mapItems == null) {
      this.getFoodData();
    }
  }

  getFoodData() {
    console.log("in getFoodData")

    fetch('http://localhost:8080/fooditems')
      .then((response) => {
        response.json().then((response) => {
          console.log(response);
          this.setState({ mapItems: response });
          this.mapItems();
        })
      })
  }

  mapItems() {
    console.log("in mapItems")
    console.log(this.state);
    if (this.foodItems == null) {
      var options = this.state.mapItems.map(opt => ({
        label: opt.foodName,
        value: opt.foodId
      }))
      this.setState({ foodItems: options });
    }
    else { console.log("foodItems is not null") };
  }

  goToShowList() {
    if (this.state.deleteList === true) {
      return (<Redirect to={{ pathname: '../showlists' }} />);
    }
  }

  render() {
    console.log("in render of manage list. Props:");
    console.log(this.props);
    console.log("here is your state:")
    console.log(this.state);
    //this.setState({ itemsList: this.props.result})
    return (

      <React.Fragment>
        <div className="ManageList">
          <h2 className="title"> {this.props.location.state.listName}</h2>

          <div className="listContainer">

            <div className="showItems">
              {this.state.itemsList ?
                this.state.itemsList.map(item =>
                  (<li key={item.itemId}>
                    {item.foodname} (size: {item.size}, qty: {item.quantity})
            </li>))
                :
                <h5>Data loading...</h5>
              }
            </div>
            {this.showAddItem()}
          </div>
          <br />
        </div>
       
        <div>
        <button className="deletebutton" onClick={() => this.startDeleteList()}>Delete this list</button>
          {this.getFoodList()}
          <br /> <br />
          {this.goToShowList()}

        </div>
      </React.Fragment>
    );
  }
}

export default ManageList;
