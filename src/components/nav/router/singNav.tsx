import Reat from "react";
import Link from "next/link";
import { icons } from "@/icons/icons";
import Singend from "./singend/singend";
import Singup from "./singedUp/singup";
export default function Singnav() {
  return (
    <>
      <div className="rout">
        <div className="log">
          <div className="signIcons">{icons.person}</div>
          <h1>sign-in</h1>
        </div>

        <div className="log">
          <div className="signIcons">{icons.personeAdd}</div>
          <Link href="/singend">sing-up</Link>
        </div>
      </div>
    </>
  );
}
