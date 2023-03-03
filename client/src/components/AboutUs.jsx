import React from "react";
import outside from "../assets/restaurant_outside.png";
import styles from "../styles/AboutUs.module.css";
export default function Story() {
  return (
    <>
      {" "}
      <h1 className="flex justify-center items-center">About Us</h1>{" "}
      <div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4">
        <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-1 bg-red-500">
          <a class="" href="#" title="Image Link">
            <div className={styles.picture}>
              <img
                class="absolute inset-0 w-full h-full object-cover"
                src={outside}
                alt="outside the restaurant"
              />
            </div>
          </a>
        </div>
        <div class="col-span-12 md:col-span-auto md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
          <div class="p-4 md:p-8 bg-phoRed shadow-lg">
            <p class="mb-2 text-lg leading-none font-medium text-snow">
              <h2>Our Story :</h2>
            </p>
            <p class="mb-2 text-snow">
              Started by a Chinese immigrant husband & wife couple, this small
              family business has been around for the last 30 years.
            </p>

            <p class="text-snow">
              {" "}
              We hope to continuously serve our customers the highest quality
              dishes using only locally sourced ingredients whenever possible.
            </p>
            <h2 className="text-ivory">Thanks for stopping by!</h2>
            <p className="text-sm text-ivory">From our family to yours.</p>
          </div>
        </div>
      </div>
    </>
  );
}
