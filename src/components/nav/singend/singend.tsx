import React from "react";
import { icons } from "@/icons/icons";
export default function Singend() {
  return (
    <div className="singend">
      <div className="rout">
        <div className="log">
          <div className="signIcons">{icons.person}</div>
          <h1>sing-up</h1>
        </div>
        <div className="log">
          <div className="signIcons">{icons.personeAdd}</div>
          <h1>sign-in</h1>
        </div>
      </div>

      <div className="dataInputs">
        <div className="user">
          <div className="userIcons">{icons.profile}</div>
          <input type="text" placeholder="Email" />
        </div>
        <div className="user">
          <div className="userIcons">{icons.lock}</div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="fogotpassword">
        <h1>forgotpassword</h1>
      </div>
      <div className="rememberme">
        <h1>rememberme</h1>
      </div>
      <div className="button">
        <div className="door">{icons.logout}</div>
        <button>sign in</button>
      </div>
    </div>
  );
}
