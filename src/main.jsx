import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // exact file name & extension

// TEMP: comment this out if you don't have styles.css yet
//import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

