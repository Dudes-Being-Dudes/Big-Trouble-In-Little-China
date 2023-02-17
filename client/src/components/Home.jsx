import React from "react";
import shef from "../assets/randomchinesechef1.jpg";
import truck from "../assets/drawnFoodTruck.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')] h-full">
        <div
          id="banner"
          className="bg-[url('../src/assets/wok_toss.jpg')] h-screen bg-cover flex-col justify-center items-center text-white mb-12"
        >
          <div className="bg-black h-full opacity-70 items-center flex flex-col w-full justify-center">
            {" "}
            <h1 className="">CHINESE INSPIRED AMERICAN MADE</h1>
            <p className="text-2xl">
              We masterfully combine the tastiest foods from the East to the
              West.
            </p>
            <button className="bg-phoRed py-2 px-6 rounded hover:text-2xl mx-48">
              Our Menu
            </button>
          </div>{" "}
        </div>{" "}
        <div className="h-full mx-12">
          <div className="flex justify-center">
            <div id="banner" className={styles.banner}>
              <h1 className="text-6xl px-2">Family Operated Business</h1>
            </div>
          </div>
          <div>
            <div
              id="section1"
              className="mt-12 flex mr-12 sm:flex-col md:flex-row justify-center"
            >
              <div className=" mr-2 ml-12 flex flex-col items-center ">
                <h1 className="bg-phoRed text-white p-4 flex justify-center shadow-md">
                  Careers
                </h1>
                <h1 className="bg-white text-black p-4 flex justify-center shadow-md">
                  We are hiring!
                </h1>
                <div className="bg-black text-white flex justify-center shadow-md">
                  <div className="flex flex-col m-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati quia distinctio animi alias tenetur doloribus
                      omnis sit ipsam cum earum voluptas ad eveniet, ea
                      molestiae, maiores ullam? Magnam, ex consectetur.
                    </p>
                    <button className="bg-phoRed p-2 justify-center hover:bg-red-700">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="">
                <img
                  className="shadow-md h-full w-full bg-white p-4"
                  src={shef}
                />
              </div>
            </div>
            <div>
              <div
                id="section2"
                className="shadow-md mt-24 flex justify-center sm:flex-col md:flex-row"
              >
                <div className="mr-2 bg-white p-4">
                  <img className="shadow-md h-full w-full" src={truck} />
                </div>
                <div className="shadow-md flex flex-col justify-center items-center">
                  <h1 className="bg-phoRed text-white p-2 shadow-md">
                    China Everywhere!
                  </h1>
                  <h1 className="bg-white text-black p-2 shadow-md">
                    food truck coming soon!? Maybe
                  </h1>
                  <div className="bg-black text-white flex flex-col shadow-md">
                    <p className="m-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati quia distinctio animi alias tenetur doloribus
                      omnis sit ipsam cum earum voluptas ad eveniet, ea
                      molestiae, maiores ullam? Magnam, ex consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
