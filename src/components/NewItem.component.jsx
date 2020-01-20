import React, { Component } from 'react';
import Axios from 'axios';

class NewItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userId: this.props.userId,
            name: "",
            description: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e) {
        const body = {
            name: this.state.name,
            description: this.state.description,
            ownerId: this.state.userId
        };
        
        Axios
            .post('http://localhost:8080/items/create-new', body)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({
            name: "",
            description: ""
        });
    }
    
    render() {
        return (
            <div>
                <h2>Create New Item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br/>
    
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <br/>
                    
                    <button>Create!</button>
                    <button onClick={this.handleCancel}>Cancel</button>
    
                </form>
            </div>
        )
    }
}

export default NewItem;