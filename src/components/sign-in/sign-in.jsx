import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, uiConfig } from "../../firebase/firebase.utils";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import loginSide from "../../assets/login-side.png";
import { Link } from "react-router-dom";

import {ArrowRightOutlined} from "@ant-design/icons" 

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  uiConfig = uiConfig;

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-container">
        <img src={loginSide} alt="loginSide" className="login-side" />
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <span className="sign-up-link"><Link to="/signup">Don't have an account? Sign up here <ArrowRightOutlined /></Link></span>
          <form action="" onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="Email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              type="password"
              name="password"
              label="Password"
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <div className="sign-in-buttons">
              <CustomButton type="submit">Sign In</CustomButton>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={auth}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
