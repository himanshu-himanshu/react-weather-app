import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      hideProgressBar={true}
      theme="colored"
      position="top-right"
      autoClose={1500}
      limit={1}
    />
    <App />
  </React.StrictMode>
);
