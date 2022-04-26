import MeetupItem from "./MeetupItem";
import classes from "../styles/MeetupList.module.css";
import React from "react";

export interface IMeetup {
  id?: string;
  title: string;
  image: string;
  address: string;
  description: string;
}
export interface IMeetupItem {
  meetups: IMeetup;
}

function MeetupList(props: any) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: IMeetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </ul>
  );
}
export default MeetupList;
