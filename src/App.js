import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Product from "./components/Product";

const App = () => (
  <div className="container">
    <Product></Product>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
