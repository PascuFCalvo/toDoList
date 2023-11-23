import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Header } from "./pages/header/header.jsx";
import { Body } from "./pages/body/body.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Header></Header>
    <Body></Body>
  </React.StrictMode>
);
