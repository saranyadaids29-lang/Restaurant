import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./context/CartContext";

import "./index.css";
import "./App.css";

const redirect = new URLSearchParams(window.location.search).get("redirect");

if (redirect) {
  window.history.replaceState(null, "", `${import.meta.env.BASE_URL.replace(/\/$/, "")}${redirect}`);
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <CartProvider>

        <App />

      </CartProvider>

    </BrowserRouter>

  </React.StrictMode>

);