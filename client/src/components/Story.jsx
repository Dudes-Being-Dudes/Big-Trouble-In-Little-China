import React from "react";
import dad from "../assets/dad.jpg";

export default function Story() {
  return (
    <div>
      <div className="flex ">
        {" "}
        <img className=" ml-16" src={dad} width={400} />
        <div className="">
          {" "}
          <h1 className="ml-4">About Us</h1>{" "}
          <div className="ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa
            deleniti at perspiciatis tempore, repellendus natus eum aliquid ea
            molestias corrupti! Minima consequatur nulla amet earum facilis
            quaerat mollitia incidunt.
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
