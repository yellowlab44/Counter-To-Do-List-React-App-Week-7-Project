import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // exact file name & extension
import "./styles.css";
// Vite automatically bundles your CSS into your app ^

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

