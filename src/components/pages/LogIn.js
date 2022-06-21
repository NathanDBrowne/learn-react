import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import "../../App.css";
import TextBody from "../TextBody";

// export default function LogIn() {
//   return (
//     <>
//       <h1 className="log-in">LOG IN</h1>
//       <TextBody
//         header="For this service to work you'll need to make an account"
//         body="That way we can connect you up with people and events!"
//       />
//     </>
//   );
// }

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Please log in</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}