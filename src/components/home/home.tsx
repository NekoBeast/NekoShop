import { icons } from "@/icons/icons";
import React from "react";
import Link from "next/link";
import Offers from "./offers/offers";
import Categories from "./categories/categories";
const Nema = () => {
  return (
    <>
      <div className="main">
      
        <div className="ads">
          <div className="catogories">
            <div className="fashon">
              <div className="icons">{icons.female}</div>
              <Link href="#">Women’s Fashon</Link>
            </div>
            <div className="fashon">
              <div className="icons">{icons.man}</div>
              <Link href="#">Man's Fashon</Link>
            </div>
            <div className="fashon">
              <div className="icons">{icons.shoes}</div>
              <Link href="/">Shoes categories</Link>
            </div>
          </div>
          <Offers />
        </div>
        <Categories />
      </div>
    </>
  );
};

export default Nema;
