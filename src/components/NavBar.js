import { NavLink } from "react-router-dom";

const linkStyles = {
  color: "#F2D2BD",
};

const activeStyle = {
  color: "#191970",
};


function NavBar() {
  return (

    <div className="NavBar">
      <NavLink
        to="/"
        exact
        style={({ isActive }) =>
        isActive ? activeStyle : linkStyles
      }
        >
        SONGS
      </NavLink>
      <NavLink
        to="/albums"
        exact
        style={({ isActive }) =>
        isActive ? activeStyle : linkStyles
      }
        >
        ALBUMS
      </NavLink>
    </div>

  );
}

export default NavBar;