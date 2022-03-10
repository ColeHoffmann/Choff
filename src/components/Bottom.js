import React from "react";
import Fade from "./Fade";

export default function Bottom() {
  return (
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="mx-auto py-5 text-sm text-gray-600 ">
        <Fade>
          <p> Developed by Cole Hoffmann</p>
          <p className="text-xsm"> Code available on my GitHub.</p>
        </Fade>
      </div>
    </div>
  );
}
