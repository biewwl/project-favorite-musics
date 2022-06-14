import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/Login.css";
import { UserLogin } from "../../redux/actions/UserAction";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { onInputChange } = this;
    const { dispatch } = this.props;
    const { name } = this.state;
    const minLength = 3;
    return (
      <div className="page-login">
        <div className="container-logo">
          <i className="fa-brands fa-spotify" />
        </div>
        <form method="get">
          <input
            placeholder="Username"
            type="text"
            name="name"
            onChange={onInputChange}
            value={name}
          />
          <button
            type="button"
            disabled={name.length < minLength}
            onClick={() => {
              dispatch(UserLogin(true, name));
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
