import React, { Component } from "react";
import "./App.css";
import srm from "./download.jpeg";
export class Header extends Component {
  render() {
    return (
      // <></> is called fragment

      <div className="Header-contanier">
        <img className="Header-logo" src={srm} alt="Header Image"></img>
        <h1 className="Header-text">This is Header file</h1>
      </div>
    );
  }
}

export default Header;
