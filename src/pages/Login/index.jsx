import React, { Component } from "react";
import { connect } from "react-redux";
import { UserLogin } from "../../redux/actions/UserAction";
import logo from "./images/logo.png";
import "./styles/Login.css";
import "./styles/Login-mobile.css";

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
        <section className="banner-login">
          <div>
            <span>✦ biewwl</span>
            <h1>Listen</h1>
            <p>Enjoy your favorite songs. Save and listen wherever you want!</p>
            <label htmlFor="name">Let's start</label>
          </div>
        </section>
        <form method="get" className="form-login">
          <div>
            <img src={logo} alt="logo" className="logo-login" />
            <span>Login</span>
            <input
              placeholder="Username"
              type="text"
              name="name"
              id="name"
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
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
