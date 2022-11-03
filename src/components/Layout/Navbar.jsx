import React from "react";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
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
            <Link to="/cart" className={classes.navLink}>
              <Badge badgeContent={cartQuantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
