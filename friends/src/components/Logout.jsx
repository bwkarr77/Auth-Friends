import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/actions.jsx";

const Logout = ({ logout }) => {
  return (
    <div>
      <Link to="/" onClick={logout}></Link>
    </div>
  );
};

export default connect(null, { logout })(Logout);
