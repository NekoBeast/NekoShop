import React from "react";
import { icons } from "@/icons/icons";
export default function Singend() {
  return (
    <div className="singend">
      <div className="dataInputs">
        <div className="user">
          <div className="userIcons">{icons.profile}</div>
          <input type="text" placeholder="Username" />
        </div>
        <div className="user">
          <div className="userIcons">{icons.lock}</div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="donForger">
        <div className="fogotpassword">
          <h1>forgot password?</h1>
        </div>
        <div className="rememberme">
          <input type="checkbox" />
          <h1>remember me</h1>
        </div>
        <div className="button">
          <div className="door">{icons.logout}</div>
          <button>sign in</button>
        </div>
      </div>
      <div className="donthave">
        <h1>
          don't have a account?<span>sign up</span>
        </h1>
      </div>
    </div>
  );
}
