import React, { useEffect } from "react";
import { connect } from "react-redux";

import { axiosWithAuth } from "./axiosWithAuth";
import { getFriends } from "../actions/actions";
import Friend from "./Friend";
const getUrl = "http://localhost:5000/api/friends";

const FriendList = ({ friendsList, getFriends, isFetching }) => {
  useEffect(() => {
    getFriends();
  }, [friendsList]);

  return !friendsList ? (
    <div>Loading List of your hommies.....</div>
  ) : (
    <div>
      {friendsList &&
        friendsList.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  friendsList: state.friendsList,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getFriends })(FriendList);
