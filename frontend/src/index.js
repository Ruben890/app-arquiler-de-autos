import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import Routers from "./Routers/routers";
import { store } from "./apps/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}><Routers /></Provider>
);