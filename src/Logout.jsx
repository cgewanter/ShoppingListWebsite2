import React, { Component } from 'react';
import './App.css';
import cart from './cart3.jpg';

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("This is componentDidMount() in logout");


        fetch('http://localhost:8080/logout', {
            method: "POST",
            mode: "no-cors",
        }
        )
            .then(console.log("logged out"));
    }
    render() {
        console.log("In render of logout");
        return (
            <div className="home">
                <h1>Thank you for using the Shopping site!</h1>
                <img src={cart} alt=""></img>
            </div>
        );
    }
}
export default Logout;
