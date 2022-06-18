import React from "react";
import "./TextBody.css";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";

function ParseNewline(props) {
  const newText = props.text.split("\n").map((str) => <p>{str}</p>);
  return <p className="text-body-subscription-text">{newText}</p>;
}

function TextBody(props) {
  return (
    <div className="text-body-container">
      <section className="text-body-subscription">
        <p className="text-body-subscription-heading">{props.header}</p>
        <ParseNewline text={props.body} />
      </section>
    </div>
  );
}

export default TextBody;
