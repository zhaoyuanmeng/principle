import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import logo from "./img/1.jpeg";
const App = () => {
  return (
    <div className="zyd-color">
      App入口12
      <img src={logo} alt></img>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
