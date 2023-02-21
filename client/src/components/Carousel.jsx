import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="banner"
        className="bg-[url('../src/assets/wok_toss.jpg')] bg-cover rounded flex-col justify-center items-center text-white mb-12 sm:hidden"
      >
        <div className="bg-black h-full opacity-70 items-center flex flex-col w-full justify-center">
          {" "}
          <h1 className="">CHINESE INSPIRED AMERICAN MADE</h1>
          <p className="text-2xl">
            We masterfully combine the tastiest foods from the East to the West.
          </p>
          <button className="bg-phoRed py-2 px-6 rounded hover:text-2xl mx-48">
            Our Menu
          </button>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Carousel;
