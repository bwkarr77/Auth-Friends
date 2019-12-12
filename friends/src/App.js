import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/friends">Friends</Link>
      <br />
      <Link to="/newfriends">Add Friend</Link>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendList} />
        <PrivateRoute exact path="/newfriends" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
