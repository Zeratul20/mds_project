import React from "react";
import { Home } from "./views/home";
import { MoviesTable } from "./views/table";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<MoviesTable />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
