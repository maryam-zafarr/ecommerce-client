import { Cancel } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const itemColor =
    props.item.color.charAt(0).toUpperCase() + props.item.color.slice(1);
  const id = props.item._id;
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className={classes.item}>
      <div className="row">
        <div className="col-2 me-4">
          <img src={props.item.img} alt={props.item.title} />
        </div>
        <div className={`col-3 ${classes.content}`}>
          <h5>{props.item.title}</h5>
          <p>Size: {props.item.size}</p>
          <p>Color: {itemColor}</p>
        </div>
        <div className="col-2">
          <p>{props.item.price}</p>
        </div>
        <div className="col-2">
          <p>{props.item.quantity}</p>
        </div>
        <div className="col-1">
          <p>{props.item.quantity * props.item.price}</p>
        </div>
        <div className="col-1">
          <Cancel onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
