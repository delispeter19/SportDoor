import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";
import Scanner from "./pages/Scanner";
import Messaging from "./pages/Messaging";
import Profile from "./pages/Profile";

function App() {
  const homePath = "/";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Home home={homePath} />}>
            <Route index element={<Locations />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="locations" element={<Locations />} />
            <Route path="scanner" element={<Scanner />} />
            <Route path="message" element={<Messaging />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
