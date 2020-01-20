import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from "./components/Navbar.component";
import LoginPage from "./components/LoginPage.component";
import UserPage from './components/UserPage.component';
import NotFound from './components/NotFound.component';
// import Login from './components/Login.component';

// Route and component declarations for various URL paths.
// Should we store user state in here: AUth and info to pass to other routes.

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact>
                            <LoginPage />
                        </ Route>
                        <Route path="/user/:id" component={UserPage} />
                        {/* <UserPage /> apparently this won't properly pass*/}
                        <Route path="*" >
                            <NotFound />
                        </ Route>
                    </Switch>
                </div>
            </Router>
        )
    };
}

export default App;
