import React from "react";
import dad from "../assets/dad.jpg";

export default function Story() {
  return (
    <div className="h-screen bg-fixed bg-cover bg-[url('../src/assets/restaurant_outside.PNG')] m-4 h-full h-80 text-white">
      <div className="flex ">
        <div className="m-4">
          <h1 className="ml-4">About Us</h1>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa
            deleniti at perspiciatis tempore, repellendus natus eum aliquid ea
            molestias corrupti! Minima consequatur nulla amet earum facilis
            quaerat mollitia incidunt.
          </div>
        </div>
        <div className="m-4">
          {" "}
          <h1>Our History</h1>
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
