import React from "react";
import shef from "../assets/randomchinesechef1.jpg";
import truck from "../assets/drawnFoodTruck.jpg";
import styles from "../styles/Home.module.css";
import Carousel from "./Carousel";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div className="h-screen bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')] h-full">
        <Carousel />
        <div className="h-full mx-12 sm:mx-0">
          <div className="flex justify-center">
            {" "}
            <div id="banner" className={styles.banner}>
              <h1 className="text-6xl px-2">Family Operated Business</h1>
            </div>
          </div>

          <div id="bigsection" className={styles.bigsection}>
            <div
              id="section1"
              className="mt-12 flex mr-12 sm:flex-col md:flex-row justify-center"
            >
              <div className=" mr-2 ml-12 flex flex-col items-center">
                <h1 className="bg-phoRed text-white p-4 flex justify-center shadow-md">
                  Careers
                </h1>
                <h1 className="bg-white text-black p-4 flex justify-center shadow-md">
                  We are hiring!
                </h1>
                <div className="bg-black text-white flex justify-center shadow-md">
                  <div className="flex flex-col m-12 ">
                    <p>
                      We pride ourselves on not being a corporate chain. We're a
                      family-run business, and we want this to shine through in
                      everything we do - from the food we cook fresh daily to
                      the team we employ and train, to the way we greet and
                      engage with our customers.
                    </p>
                    <p>
                      We encourage our staff to be themselves at work so they
                      can feel happy, relaxed, and give our customers the best
                      possible experience when they dine with us.
                    </p>
                    <p>
                      If you think you would be a good fit here, you can read
                      more with the link below.
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
                className=" mt-24 flex justify-center sm:flex-col md:flex-row "
              >
                <div className="mr-2 bg-white p-4">
                  <img className="shadow-md h-full w-full " src={truck} />
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <h1 className="bg-phoRed text-white p-2 shadow-md">
                    China Everywhere!
                  </h1>
                  <h1 className="bg-white text-black p-2 shadow-md">
                    East? West? All Directions!
                  </h1>
                  <div className="bg-black text-white flex flex-col m-12">
                    <div className="flex flex-col m-12 ">
                      <p>
                        Introducing the newest addition to the food truck scene-
                        Get ready to experience authentic Chinese cuisine
                        on-the-go!
                      </p>
                      <p>
                        Our food truck may be coming soon to your area and we
                        can't wait to share our delicious dishes with you. We
                        offer a wide range of mouth-watering dishes that are
                        sure to satify any craving.
                      </p>
                      <p>
                        Keep an eye out for our food truck and get ready to be
                        transported to the bustling streets of China.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-30 h-screen bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')] h-full"></div>
    </>
  );
}
