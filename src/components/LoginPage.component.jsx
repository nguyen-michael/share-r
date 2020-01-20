import React, { Component } from 'react';
import NewUser from './NewUser.component';
import Login from './Login.component';
import Axios from 'axios';


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

    }

    componentDidMount() {
        // Make call to load in DB data (user's list).
        Axios
            .get('http://localhost:8080/users')
            .then(response => {
                console.log("Got list of users!", response);
                this.setState({
                    users: response.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    render() {
        return (
            <div>
                <h1>Share-r</h1>
                <p>Welcome to Share-r, a localized material possession distribution network. This is currently in development. Please select your name or create a new user below.</p>
                <Login usersList={this.state.users}/>
                <NewUser />
            </div>
        );
    }
}

export default LoginPage;