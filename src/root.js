import React from "react";
import Class from "./Class";
import Hooks from "./Hooks";

export default class Root extends React.Component {
  render() {
    console.log("whats up");
    
    return (
      <div style={{ display: "flex" }}>
        <Class />
        <Hooks />


      </div>
    )
  }
}
