import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <div>
      <NavLink
        to="/"
        exact
        >
        SONGS
      </NavLink>
      <NavLink
        to="/albums"
        exact
        >
        ALBUMS
      </NavLink>
    </div>

  );
}

export default NavBar;