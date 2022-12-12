import { Component } from "react";
import Menu10 from "./Menu10";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import Menu6 from "./Menu6";
import Menu7 from "./Menu7";
import Menu8 from "./Menu8";
import Menu9 from "./Menu9";

class Menu1 extends Component {
  render() {
    return (
      <div>
        <h3> Menu1</h3>
        <Menu2 />
        <Menu3 />
        <Menu4 />
        <Menu5 />
        <Menu6 />
        <Menu7 />
        <Menu8 />
        <Menu9 />
        <Menu10 />
      </div>
    );
  }
}

export default Menu1;
