import React, { useRef } from "react";
import { Login } from "../components/login";
import "./logout.css";
import "../App.css";

export const Home = ({ isLoaded, setIsLoaded, userId, setUserId }: any) => {
  const scrollbar = useRef(null);
  const handleClick = (event: any) => {
    event.preventDefault();
    setIsLoaded(false);
  };
  return (
    <div>
      <main id = "HomeMain">
        <section id="Despre">
          <h1>Hello!</h1>
          <br/>
          <p>Welcome to our website, your ultimate destination for all things cinema! Whether you're a devoted cinephile or simply looking for some weekend entertainment recommendations, we've got you covered. Our dedicated team of passionate film enthusiasts is here to provide you with insightful and honest reviews of the latest blockbusters, indie gems, timeless classics, and everything in between.</p>
        </section>
        <section id="Filme">
          <ul><h2>Creator's favorite movies:</h2>
          <br/>
            <li>Amadeus</li>
            <li>Citizen Kane</li>
            <li>Vertigo</li>
            <li>Schindler's List</li>
            <li>2001 A Space Odyssey</li>
          </ul>
        </section> {/*}
        <section id="mesajeRecente">
          Cele mai populare mesaje in ultimele 24h:
        </section>*/}
        <section id="login">
          {!isLoaded ? (
            <Login setIsLoaded={setIsLoaded} setUserId={setUserId} />
          ) : (
            <div style={{ overflowY: "auto" }}>
              <div className="sample-container"></div>
            </div>
          )}
        </section>
      </main>
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