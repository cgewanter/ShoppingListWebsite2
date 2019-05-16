import React, { Component } from 'react';
import './App.css';
import Select from 'react-select';


class ShowDeleteMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {deleteItem: null, itemList: null}
    }


    setItemDelete =(e)=>{
        this.setState({deleteItem: e.value})
    }


    mapItems() {
        console.log("in mapItems")
        console.log(this.state);
        if (this.props.list != null) {
          var options = this.state.list.map(opt => ({
            label: opt.foodname,
            value: opt.itemId
          }))
          this.setState({ itemList: options });
        }
        
    }

    render() {
        return (
            <React.Fragment>
                <p>Select item to delete...</p>
                <Select
                    className="select" onChange={this.mapItems}
                    options={
                        this.state.itemList ?
                            this.state.itemList :
                            [
                                { label: "Loading...", value: "loading..." }
                            ]
                    }
                />
            </React.Fragment>

        );
    }

}
export default ShowDeleteMenu;