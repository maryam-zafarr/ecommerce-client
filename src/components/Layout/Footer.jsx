import { MailOutline, Phone, Room } from "@mui/icons-material";
import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.left}>
        <h3>V A N I T Y</h3>
        <p>
          Influential, innovative and progressive, Vanity is reinventing a
          wholly modern approach to fashion. Under the new vision of creative
          director Alysia Carlyle, the brand has redefined luxury for the 21st
          century.
        </p>
      </div>
      <div className={classes.center}>
        <h4>Useful Links</h4>
        <ul>
          <li>About Vanity</li>
          <li>Shipping</li>
          <li>Payment Options</li>
          <li>Returns & Exchanges</li>
          <li>Product Care</li>
          <li>FAQs</li>
          <li>Order Tracking</li>
          <li>Careers</li>
          <li>Privacy and Cookies</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className={classes.right}>
        <h4>Contact</h4>
        <div className={classes.contactItem}>
          <Room style={{ marginRight: "10px" }} /> 123 Parkland Street, NYC,
          98336
        </div>
        <div className={classes.contactItem}>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 789
        </div>
        <div className={classes.contactItem}>
          <MailOutline style={{ marginRight: "10px" }} /> contact@vanity.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
