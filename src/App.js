
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageComponent from "./components/LandingPageComponent/LandingPageComponent";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
