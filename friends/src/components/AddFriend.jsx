import React from "react";
import { connect } from "react-redux";
import { addFriend, handleChange } from "../actions/actions";

const AddFriend = ({ addFriend, newFriend, handleChange }) => {
  return (
    <div>
      <form onSubmit={e => addFriend(e, newFriend)}>
        <input
          name="name"
          type="text"
          placeholder="New friend name"
          value={newFriend.name}
          onChange={e => handleChange(e, "newFriend")}
        />
        <input
          name="age"
          type="text"
          placeholder="New friend age"
          value={newFriend.age}
          onChange={e => handleChange(e, "newFriend")}
        />
        <input
          name="email"
          type="text"
          placeholder="Their email!!"
          value={newFriend.email}
          onChange={e => handleChange(e, "newFriend")}
        />
        <button>AddFriend</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  newFriend: state.newFriend
});
export default connect(mapStateToProps, { addFriend, handleChange })(AddFriend);