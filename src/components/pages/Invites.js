import React from "react";
import "../../App.css";
import TextBody from "../TextBody";

export default function Invites() {
  return (
    <>
      <h1 className="invites">INVITES</h1>
      <TextBody
        header="Invites"
        body="Events you've been invited to will show up here!"
      />
    </>
  );
}
