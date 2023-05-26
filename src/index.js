import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultsProvider } from "./context/resultcontext";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cartcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ResultsProvider>
        <Router>
          <App />
        </Router>
      </ResultsProvider>
    </CartProvider>
  </React.StrictMode>
);
