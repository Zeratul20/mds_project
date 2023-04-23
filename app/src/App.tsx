import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { SignUp } from "./components/signUp";
import { MoviesTable } from "./views/table";
import { Logout } from "./components/logout";
import { Movie } from "./views/movie";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userId, setUserId] = useState(0);

  const [movieId, setMovieId] = useState(0);

  console.log(">>>App.tsx: ", isLoaded);
  return (
    <div>
      <div>
        <Router>
          <Navbar isLoaded={isLoaded} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoaded={isLoaded}
                  setIsLoaded={setIsLoaded}
                  userId={userId}
                  setUserId={setUserId}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  isLoaded={isLoaded}
                  setIsLoaded={setIsLoaded}
                  userId={userId}
                  setUserId={setUserId}
                />
              }
            />
            <Route path="/movies" element={<MoviesTable setMovieId={setMovieId}/>} />
            {!isLoaded && <Route path="/signup" element={<SignUp />} />}
            {isLoaded && <Route path="/logout" element={<Logout isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>} />}
            <Route path="/movies/:movieId"
              element={<Movie movieId={movieId}/>}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
