import React from "react";
// import moment from "moment";
import { axiosWithAuth } from "./axiosWithAuth";

const getUrl = "http://localhost:5000/api/friends";

class Content extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get(getUrl)
      .then(res => {
        console.log("Content.jsx: getData: axiosWithAuth.get.res:", res.data);
        this.setState({
          friendsList: res.data
        });
      })
      .catch(e => console.log("getData.error:", e));

    console.log(this.friendsList);
  };

  formatData = () => {
    const formattedData = [];
    this.state.friendsList.forEach(friend => console.log(friend));
  };

  render() {
    console.log(this.friendsList);
    return (
      <div>
        <h2>ContentLoaded</h2>
        <p>Friends List</p>
      </div>
    );
  }
}

export default Content;
