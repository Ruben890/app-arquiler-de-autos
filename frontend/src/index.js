import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import Routers from "./Routers/routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routers />
);