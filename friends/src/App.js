// dependancy imports
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// component imports
import Login from "./components/Login";
import FriendList from "./components/FriendList";

import PrivateRoute from "./components/PrivateRoute"

// style imports
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello, Friends!</h1>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends!</Link>
          </nav>
        </header>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
