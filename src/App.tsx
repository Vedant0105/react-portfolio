import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login"; // your login component
import Dashboard from "./Dashboard";
import Portfolio from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
