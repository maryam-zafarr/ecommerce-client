import React from "react";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  let navElements;

  if (user) {
    navElements = (
      <ul>
        <li>Hi, {user.username}</li>
        <li>
          <Link to="/" className={classes.navLink} onClick={onLogout}>
            LOG OUT
          </Link>
        </li>
        <li>
          <Link to="/cart" className={classes.navLink}>
            <Badge badgeContent={cartQuantity} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </li>
      </ul>
    );
  } else {
    navElements = (
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
    );
  }

  return (
    <div className={`fixed-top ${classes.navbar}`}>
      <h1 className={classes.logo}>V A N I T Y</h1>
      <nav>{navElements}</nav>
    </div>
  );
};

export default Navbar;
