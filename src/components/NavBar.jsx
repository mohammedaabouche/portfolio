import React from "react";
import "../style/style.css";
function NavBar() {
  let menu = ["About Me","My Story" , "My Projects", "Contact Me"];

  return (
    <nav className="navbar grid grid-cols-4">
      <a className="navbar-brand" href="/">
        My Portfolio
      </a>
      <ul className="grid grid-cols-4  col-start-4">
        {menu.map((item) => (
          <li>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
