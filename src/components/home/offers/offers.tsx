import React from "react";
import { Image } from "@nextui-org/image";

export default function Offers() {
  return (
    <div className="offers">
      <div className="offer1">
        <div className="img">
          <Image
            src="https://i.pinimg.com/originals/c8/4a/bc/c84abc3e23190b2d1e079e203b6c8fd5.jpg"
            alt="wanna see"
            style={{
              width: 600,
            }}
          />
        </div>
      </div>
    </div>
  );
}
