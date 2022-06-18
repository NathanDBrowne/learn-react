import React from "react";
import "../../App.css";
import TextBody from "../TextBody";

export default function SignUp() {
  return (
    <>
      <h1 className="sign-up">SIGN UP</h1>
      <TextBody
        header="For this service to work you'll need to make an account"
        body="That way we can connect you up with people and events!"
      />
    </>
  );
}
