import React, { BaseSyntheticEvent, useRef } from "react";
import Card from "./ui/Card";
import classes from "../styles/MeetupForm.module.css";
import { IMeetup } from "./MeetupList";

function MeetupForm() {
  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const descriptionRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  function submit(e: React.FormEvent) {
    console.log(e);
    e.preventDefault();
    const title = titleRef.current.value;
    const image = titleRef.current.value;
    const address = titleRef.current.value;
    const description = titleRef.current.value;
    const meetup: IMeetup = {
      title,
      image,
      address,
      description,
    };
    console.log(meetup);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submit}>
        <h3>Meetup Form</h3>

        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="text" required id="image" ref={imageRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            rows={5}
            ref={descriptionRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button> Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default MeetupForm;
