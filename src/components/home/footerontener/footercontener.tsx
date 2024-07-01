import React from "react";
import { icons } from "@/icons/icons";
export default function Footer() {
  return (
    <div className="footerBg">
      {" "}
      <div className="footernav">
        <table>
          <tr className="information">
            <th>company</th>
            <th>get help</th>
            <th>oneline shop</th>
          </tr>
          <tr>
            <td>about us</td>
            <td>FAQ</td>
            <td className="onelineShoping">shoes</td>
          </tr>
          <tr>
            <td>our services</td>
            <td> shoping</td>
            <td className="onelineShoping">bag</td>
          </tr>
          <tr>
            <td>privacy </td>
            <td>return</td>
            <td className="onelineShoping">dress</td>
          </tr>
        </table>
        {/* <div className="socialIcons">
          <div className="icon">
            <div className="facebool">{icons.facebook}</div>
          </div>
          <div className="icon">
            <div className="facebool">{icons.insta}</div>
          </div>
        </div> */}
        <div className="comment">
          <h1>comment</h1>

          <textarea cols={10} rows={10}></textarea>
          <button>submit</button>
        </div>
      </div>
    </div>
  );
}
