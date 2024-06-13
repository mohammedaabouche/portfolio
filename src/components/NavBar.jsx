import React from "react";
import "../style/style.css";
function NavBar() {
  let menu = ["About Me","My Story" ,"My Skills" ,"My Projects", "Contact Me"];

  return (
    <nav className="navbar grid grid-cols-3">
      <a className="navbar-brand" href="/">
        My Portfolio
      </a>
      <ul className="grid grid-cols-5  col-start-3">
        {menu.map((item ,index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
