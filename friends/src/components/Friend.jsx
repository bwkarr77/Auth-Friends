import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.friend.name}!</h2>
    </div>
  );
};

export default Friend;
