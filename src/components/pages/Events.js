import React from "react";
import "../../App.css";
import TextBody from "../TextBody";

export default function Events() {
  return (
    <>
      <h1 className="events">EVENTS</h1>
      <TextBody
        header="Events"
        body="Any events in which you are involved with will show up here."
      />
    </>
  );
}
