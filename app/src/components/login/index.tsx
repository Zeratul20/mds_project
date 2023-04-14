import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";

export const Login = ({ setIsLoaded, setUserId }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  console.log(">>>Username: ", username);

  console.log("setIsLoaded: ", setIsLoaded);

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

  const handleClick = (event: any) => {
    event.preventDefault();
    console.log(">>>Username: ", username);
    console.log(">>>Password: ", password);
    setButtonPressed(true);
  };

  useEffect(() => {
    if (buttonPressed) {
      console.log(">>>>>>>>HERE");

      axios
        .post(`http://localhost:8080/api/users/login/${username}`, { password })
        .then((response) => {
          console.log(response);
          setUserId(response?.data[0]?.id);
          console.log(">>>User: ", response?.data[0]?.id);
          if (response.status === 200) setIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                onChange={handleUsernameChange}
                type="text"
                className="login__input"
                placeholder="Username"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                onChange={handlePasswordChange}
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button onClick={handleClick} className="button login__submit">
              <span className="button__text">Log In</span>
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
};
