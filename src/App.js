import "./App.css";
import React from "react";
import Home from "./components/Home";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
