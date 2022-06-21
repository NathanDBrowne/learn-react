import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Invites from "./components/pages/Invites";
import Events from "./components/pages/Events";
import LogIn from "./components/pages/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  const [token, setToken] = useState()

  if(!token) {
    return <LogIn setToken={setToken} />
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invites" element={<Invites />} />
          <Route path="/events" element={<Events />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
