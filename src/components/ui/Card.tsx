import classes from "../../styles/Card.module.css";
import React from "react";

function Card(props: any) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
