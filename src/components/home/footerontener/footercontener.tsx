import React from "react";
import { icons } from "@/icons/icons";
export default function Footer() {
  return (
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
          <td>shoes</td>
        </tr>
        <tr>
          <td>our services</td>
          <td> shoping</td>
          <td>bag</td>
        </tr>
        <tr>
          <td>privacy </td>
          <td>return</td>
          <td>dress</td>
        </tr>
        <tr>
          <td>privacy </td>
          <td>return</td>
          <td>dress</td>
        </tr>
      </table>
        <div className="socialIcons">
          <div className="icon">
            <div className="facebool">{icons.facebook}</div>
          </div>
          <div className="icon">
            <div className="facebool">{icons.insta}</div>
          </div>
        </div>
    </div>
  );
}
