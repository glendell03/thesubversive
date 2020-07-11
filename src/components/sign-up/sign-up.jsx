import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./sign-up.styles.scss";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import signupSide from "../../assets/signup-side.png";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { ArrowLeftOutlined } from "@ant-design/icons"

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      this.props.history.push("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up-container">
        <img src={signupSide} alt="signupSide" className="sign-up-side" />
        <div className="sign-up">
          <h2 className="title">I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <span className="sign-in-link"><Link to="/signin"><ArrowLeftOutlined /> Go back to Sign in</Link></span>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label="Display Name"
              required
            />

            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              required
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label="Password"
              required
            />

            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
              required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
