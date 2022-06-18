import React from "react";
import "../../App.css";
import TextBody from "../TextBody";

export default function Services() {
  return (
    <>
      <h1 className="services">SERVICES</h1>
      <TextBody
        header="What does link do"
        body="We're not going to mention the old place we all used to go for event organisation so let's just call them... SpaceNook.
        SpaceNook is old and boring for everyone except your aunt... not to mention - it's run by an evil megacorporation called ...uhhh... Feta."
      />
    </>
  );
}
