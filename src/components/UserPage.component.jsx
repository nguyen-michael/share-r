import React, { Component } from 'react';
import Navbar from './Navbar.component';
import NewItem from './NewItem.component';
import ItemCard from './ItemCard.component';
import Axios from 'axios';

// User's page, list of user's item. Should redirect back if not logged in / sessioned

// Remember to implement borrower name. Currently hardcoded to just be same user no matter what

class UserPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.id,
            userName: "",
            items: []
        };

        // this.processItemCards = this.processItemCards.bind(this);
    }

    componentDidMount() {
        // Check out this rad axios parallel call!
        Axios
            .all([
                Axios.get(`http://localhost:8080/items/user/${this.state.userId}`),
                Axios.get(`http://localhost:8080/users/${this.state.userId}`)
            ])
            .then(Axios.spread((items, userData) => {
                this.setState({
                    userName: userData.data.username,
                    items: items.data
                });
            }))
            .catch(err => console.log(err));
    }


    render() {
        /*         const processItemCards = () => {
                    this.state.items.map(item => {
                        return (<ItemCard key={item._id} itemName={item.name} owner={this.state.userName} currentPossessor={this.state.userName} description={item.description} />)
                    });
                } */

        // Preprocess items
        /*         const processedArr = this.state.items.map(item => {
                    // Checking if anyone is borrowing the item
                    console.log(item);
                    let borrower = this.state.userName;
                    let processed = {}
                    if (item.owner !== item.currentPossessor) {
                        // Get username of borrower
                        Axios
                            .get(`http://localhost:8080/users/${item.currentPossessor}`)
                            .then(response => {
                                borrower = response.data.username;
                                processed = {
                                    key: item._id,
                                    itemName: item.name,
                                    owner: this.state.userName,
                                    currentPossessor: borrower,
                                    description: item.description
                                }
                                
                            })
                            .catch(err => console.log(err));
        
                            console.log(processed);
                            return processed;
                        // console.log(item.owner, item.currentPossessor)
                    } else {
                        processed = {
                            key: item._id,
                            itemName: item.name,
                            owner: this.state.userName,
                            currentPossessor: borrower,
                            description: item.description
                        }
                        console.log(processed);
                        return processed;
                    }
                }); */

        return (
            <div>
                <Navbar />
                <br />
                <h3>{this.state.userName}'s things!</h3>
                <p>
                    User page. Perhaps user profile in here?
                </p>
                <NewItem userId={this.state.userId}/>
                <h3>Things</h3>
                <p>Load in user's items here. Should be able to dynamically generate via map or another array into components of ItemCards.</p>
                {this.state.items.map(item => {
                    return (<ItemCard key={item._id} itemName={item.name} owner={this.state.userName} currentPossessor={this.state.userName} description={item.description} />)
                })}
            </div>
        );
    }
}

export default UserPage;