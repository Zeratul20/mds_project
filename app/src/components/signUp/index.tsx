import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./signup.css"

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  const [errorSingUp, setErrorSignUp] = useState(false);

  let userAlreadyExists = false;
  let allGood = false;

  const handleUsernameChange = (event: any) => {
    event.preventDefault();
    setButtonPressed(false);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    event.preventDefault();
    setButtonPressed(false);
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setButtonPressed(false);
    setEmail(event.target.value);
  };

  const handleClick = () => {
    console.log(">>>Username: ", username);
    console.log(">>>Password: ", password);
    console.log(">>>Email: ", email);
    setButtonPressed(true);
  };

  useEffect(() => {
    if (buttonPressed) {
      axios
        .post("http://localhost:8080/api/users/signUp", {
          username,
          password,
          email,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) allGood = true;
          if (response.status === 400) userAlreadyExists = true;
        })
        .catch((error) => {
          console.log(error);
          setErrorSignUp(true);
        });
    }
  }, [buttonPressed, username, password, email]);

  if (!buttonPressed) {
    return (
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="signup">
              <div className="signup__field">
                <i className="signup__icon fas fa-user"></i>
                <input
                  onChange={handleUsernameChange}
                  type="text"
                  className="signup__input"
                  placeholder="Username"
                />
              </div>
              <div className="signup__field">
                <i className="signup__icon fas fa-lock"></i>
                <input
                  onChange={handlePasswordChange}
                  type="password"
                  className="signup__input"
                  placeholder="Password"
                />
              </div>
              <div className="signup__field">
                <i className="signup__icon fas fa-email"></i>
                <input
                  onChange={handleEmailChange}
                  type="text"
                  className="signup__input"
                  placeholder="Email"
                />
              </div>
              <button onClick={handleClick} className="button signup__submit">
                <span className="button__text">Sign Up</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    );
  }
  if (userAlreadyExists) {
    return (
      <div>
        An account with the username {username} already exists. Please refresh
        and choose another username.
      </div>
    );
  }
  if (errorSingUp) {
    return (
      <div>
        You entered an invalid username or password. Please refresh the page and
        try again.
      </div>
    );
  }
  return <div>You have been signed up. </div>;
};
