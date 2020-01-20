import React, { Component } from 'react';
import Axios from 'axios';

// Component for creating new user.
// Currently Create user by user name then defaults the page
// Later should take to user's page?

class NewUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        // Default not prevented so drop down can update.

        const newUser = {
            username: this.state.username
        };

        Axios
            .post('http://localhost:8080/users/create-new', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <p>Please input your name and send it in! Then find your name in the dropdown to continue.</p> 
                <form onSubmit={this.onSubmit} >
                    <label>User Name:</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        required
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewUser;