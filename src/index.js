import React from "react";
import ReactDOM from "react-dom";
import "bootstrap.min.css";
import "index.css";
import App from "./App";
import { AuthProvider } from "context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById("root")
);
