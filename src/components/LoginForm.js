import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, createUser } from "../actions/getAuthUser";
// import { Button, Input, Image } from "semantic-ui-react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      create_name: "",
      create_email: "",
      create_password: "",
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNewAccount = event => {
    event.preventDefault();
    this.props.createUser(
      this.state.create_name,
      this.state.create_email,
      this.state.create_password,
      this.props.history
    );
    this.props.history.push("/logged");
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password, this.props.history);
    this.props.history.push("/create_event");
  };

  render() {
    console.log("you are here", this.state);
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div>
            <h4>Log In Page</h4>
          </div>
          <br />
          <br />
          <br />
          <form onSubmit={this.handleNewAccount}>
            <input
              onChange={this.handleChange}
              name="create_name"
              type="text"
              placeholder="Name"
              value={this.state.create_name}
              required
            />
            <br />
            <input
              onChange={this.handleChange}
              name="create_email"
              type="text"
              placeholder="Email"
              value={this.state.create_email}
              required
            />
            <br />
            <input
              onChange={this.handleChange}
              name="create_password"
              type="password"
              placeholder="Password"
              value={this.state.create_password}
              required
            />
            <br />
            <br />
            <button>Create an Account</button>
          </form>
          <h2>or</h2>
          <form onSubmit={this.handleLogin}>
            <input
              onChange={this.handleChange}
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              required
            />
            <br />
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              required
            />
            <br />
            <button>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { login, createUser })(LoginForm));
