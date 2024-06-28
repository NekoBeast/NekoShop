"use client";
import { Image } from "@nextui-org/image";
import React from "react";
import { icons } from "@/icons/icons";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <div className="clipPath"></div>
        <div className="header">
          <h1>
            Neko
            <br />
            <span className="shop">shop</span>
          </h1>
        </div>
      </div>

      <div className="search">
        <input type="search" placeholder="Search..." />
        <div className="searchIcone"></div>
      </div>
      <div className="nav">
        <div className="profile">
          <Image
            width={50}
            height={50}
            src="https://i.pinimg.com/originals/b8/62/38/b862387fe5f58e6d7ada2c27ef891a05.jpg"
            style={{ borderRadius: 100 }}
          />
          <div className="info">
            <div className="intro">
              <h5>hello</h5>
              <div className="dropDown" style={{ fontSize: "3em" }}>
                {icons.dropDown}
              </div>
            </div>
            <h1>NekoBeast</h1>
          </div>
        </div>

        <div className="languages">
          <div className="globe">{icons.globe}</div>
          <h1>EN</h1>
          <div className="dropDown" style={{ fontSize: "1em" }}>
            {icons.dropDown}
          </div>
        </div>
        <div className="shop" style={{ fontSize: "3.5em" }}>
          {icons.shop}
        </div>
      </div>
    </nav>
  );
}
