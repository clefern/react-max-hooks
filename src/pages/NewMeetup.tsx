import React, { ReactElement } from "react";
import MeetupForm from "../components/MeetupForm";

function NewMeetupPage(): ReactElement<any, any> {
  return (
    <div className="">
      <h2>New Meetup Page</h2>
      <MeetupForm />
    </div>
  );
}
export default NewMeetupPage;
