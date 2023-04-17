import React, { useRef } from "react";
import { Login } from "../components/login";
import "./logout.css";

export const Home = ({ isLoaded, setIsLoaded, userId, setUserId }: any) => {
  const scrollbar = useRef(null);
  const handleClick = (event: any) => {
    event.preventDefault();
    setIsLoaded(false);
  };
  return (
    <div>
      {!isLoaded ? (
        <Login setIsLoaded={setIsLoaded} setUserId={setUserId} />
      ) : (
        <div style={{ overflowY: "auto" }}>
          <button onClick={handleClick} className="button logout__submit">
            <span className="button__text">Log Out</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
          <div className="sample-container"></div>
        </div>
      )}
      <footer>
        <h3>Contact:</h3>
        <ul>
          <li>
            Telefon: <a href="tel:+40712345678">0712345678</a>
          </li>
          <li>
            <a href="https://www.google.com/maps?cid=17177553220990845266">
              Locatia noastra
            </a>
          </li>
          <li>
            Email: <a href="mailto:ionel@gmail.com">mailto:ionel@gmail.com</a>
          </li>
          <li>
            <a href="skype:user123?chat">Skype chat</a>
          </li>
        </ul>
        <br />
        <br />
        <div id="copyright">
          <p>
            <small>Copyright &copy;2023</small>
          </p>
          <p>
            <small>Donciu Mircea & Vlad Andries</small>
          </p>
        </div>
      </footer>
    </div>
  );
};
