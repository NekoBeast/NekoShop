"use client";
import React from "react";
import { icons } from "@/app/icons/icons";
import Link from "next/link";
import { Main } from "./productStyle";


export default function Product() {
  return (
    <Main>
      <div className="productSection">
        <div className="sideBar"></div>
        <div className="List">
          <ul>
            <Link href="/">
              <li>shop</li>
            </Link>
            <li>collection</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="pd">
          {" "}
          <div className="body">
            <div className="airjordan">
              <h1>air jordan 1</h1>
              <h2>mid se</h2>
            </div>
            <div className="paragraph">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                nam.
              </p>
            </div>

            <div className="price">
              <h1>
                Rs<span className="ammount">50.0</span>
              </h1>
            </div>
            <div className="button">
              <button>shop</button>
            </div>
            {/* <Button variant="filled">Button</Button> */}
          </div>
          <div className="img">
            <img
              src="https://i.pinimg.com/originals/81/8e/43/818e43b3fde61f87a91d2150a61c87c6.jpg"
              alt="shoes"
            />
          </div>
          <div className="social">
            <div className="iconsbag">{icons.bags}</div>
            <p>
              {" "}
              free shipping-
              <span className="gray">on all oders above rs 50</span>
            </p>
            <div className="socialicons">
              <div className="facebook">{icons.facebook}</div>
              <div className="insta">{icons.insta}</div>
            </div>
          </div>
        </div>
        <div className="productScroll">
          <div className="scrollbox">
            <div className="box">
              <div className="galary">
                <div className="catogories">
                  <div className="imges">
                    <img
                      src="https://i.pinimg.com/originals/a7/e1/55/a7e155e179dab64b1551a8c5db09252c.jpg"
                      alt="shoes"
                    />
                  </div>
                </div>
              </div>
              <div className="galary">
                <div className="catogories">
                  <div className="imges">
                    <img
                      src="https://i.pinimg.com/originals/a7/e1/55/a7e155e179dab64b1551a8c5db09252c.jpg"
                      alt="shoes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
