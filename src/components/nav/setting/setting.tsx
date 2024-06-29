import { icons } from "@/icons/icons";
import React from "react";
export default function Setting() {
  return (
    <div className="setting">
      <div className="icons">
        <div className="profileImg"></div>
        <h1>profile</h1>
      </div>
      <div className="icons">
        <div className="manageMyAcc">{icons.profile}</div>
        <h1>Manage my account</h1>
      </div>
      <div className="icons">
        <div className="orderList">{icons.profile}</div>
        <h1>My Orders</h1>
      </div>
      <div className="icons">
        <div className=" wishList">{icons.profile}</div>
        <h1>My Wishlist & Followed Stores</h1>
      </div>
      <div className="icons">
        <div className="logOut">{icons.profile}</div>
        <h1>LogOut</h1>
      </div>
    </div>
  );
}
