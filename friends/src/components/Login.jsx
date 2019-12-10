import React from "react";
import axios from "axios";

const apiUrl = "http://localhost:5000/api/login";
const testInfo = {
  testName: "Lambda School",
  testPass: "i<3Lambd4",
  testKey:
    "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ"
};

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    axios
      .post(apiUrl, this.state.credentials)
      .then(res => {
        console.log("login.js, login:axios.then, res:", res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log("login.jsx, axios.catch err:", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}

export default Login;
