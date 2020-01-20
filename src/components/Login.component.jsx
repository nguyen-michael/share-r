import React, { Component } from 'react';

// Log in functionality

// for now it is a selection tool for currently loaded user.
// Expects in list of user names to populate drop down menu.

// On selection, queries the ID and takes you to the user's page.

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSelected: "none"
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e) {
        // Needs prevent default to work, why?
        e.preventDefault();
        if(this.state.userSelected !== "none") {
        window.location.href = `/user/${this.state.userSelected}`;
        } else {
            alert("Please pick a user.");
        }
    }

    handleChange(e) {
        this.setState({
            userSelected: e.target.value
        });
    }

    render() {
        return (
            <div>
                <p>
                    Login functionality, for now it's just a list of users that exist.
                </p>
                <form>
                    <select value={this.state.userSelected} onChange={this.handleChange}>
                        <option value="none" id="none">Select a User</option>
                        {this.props.usersList.map(user => {
                          return (<option value={user._id} key={user._id}>{user.username}</option>)
                        })}
                    </select>
                    <button type="submit" onClick={this.handleSubmit}>Go!</button>
                </form>
            </div>
        );
    }
}

export default Login;