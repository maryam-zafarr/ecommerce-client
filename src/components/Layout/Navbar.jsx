import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className={`fixed-top ${classes.navbar}`}>
      <h1 className={classes.logo}>V A N I T Y</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/register" className={classes.navLink}>
              REGISTER
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={classes.navLink}>
              SIGN IN
            </NavLink>
          </li>
          <li>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
