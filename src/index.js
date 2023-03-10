import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import App from "./App";
const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <GoogleOAuthProvider
    clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
    render={(renderProps) => (
      <button type="button" className="bg-mainColor">
        <FcGoogle className="mr-4" /> Sign in with Google
      </button>
    )}
  >
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>
);
