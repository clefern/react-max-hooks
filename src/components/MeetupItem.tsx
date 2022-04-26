import classes from "../styles/MeetupItem.module.css";
import Card from "./ui/Card";
import React from "react";

console.log(classes.toString());

function MeetupItem({ meetup }: any) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.image} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
