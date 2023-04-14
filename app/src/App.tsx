import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { SignUp } from "./components/signUp";
import { MoviesTable } from "./views/table";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userId, setUserId] = useState(0);

  const [gameObj, setGameObj] = React.useState({ id: 0, fen: "" });

  const [fen, setFen] = React.useState("");

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
            <Route path="/movies" element={<MoviesTable />} />
            {!isLoaded && <Route path="/signup" element={<SignUp />} />}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
