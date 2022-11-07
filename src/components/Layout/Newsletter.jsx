import { Send } from "@mui/icons-material";
import React from "react";
import classes from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className={classes.inputConatainer}>
        <input placeholder="Your email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
