import React from "react";
import shef from "../assets/randomchinesechef1.jpg";
import truck from "../assets/drawnFoodTruck.jpg";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')] h-full">
        <div className="h-full mx-12 sm:mx-0">
          <div className="flex justify-center">
            {" "}
            <div id="banner" className={styles.banner}>
              <h1 className="text-6xl px-2 mt-10">Family Operated Business</h1>
            </div>
          </div>

          <div id="bigsection" className={styles.bigsection}>
            <div id="hiring" className="container mt-32 mx-auto p-4 md:p-0">
              <div
                id="hiringWrapper"
                className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto"
              >
                <div
                  id="hiringImg"
                  className="bg-[url('../src/assets/randomchinesechef1.jpg')] bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
                ></div>
                <div id="hiringBody" className="bg-white w-full md:w-2/3 ">
                  <div
                    id="hiringBodyOuter"
                    className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative bg-snow"
                  >
                    <div
                      id="hiringBodyInner"
                      className="bg-snow lg:h-full p-6 -mt-6 md:mt-0 relative mb-6 md:mb-0 shadow-lg lg:-ml-6 lg:my-2 md:-mt-6 flex flex-wrap md:flex-wrap items-center"
                    >
                      <div>
                        <div
                          id="hiringCardInfo"
                          className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left"
                        >
                          <h3>Careers</h3>
                          <p className="mb-0 mt-3 text-phoRed text-sm italic">
                            We are hiring!
                          </p>
                          <hr className="w-1/4 md:ml-0 mt-4 border"></hr>
                        </div>
                        <div
                          id="hiringCardText"
                          className="w-full lg:w-3/5 lg:px-3"
                        >
                          <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                            China Center Restaurant fosters a genuine family
                            environment. No experience needed, we'd love to hear
                            from you!
                          </p>
                        </div>
                        <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                          <button
                            onClick={async (e) => {
                              navigate("/careers");
                            }}
                            class="hover:bg-red-700 hover:text-white text-white bg-phoRed border border-solid border-grey w-2/3 lg:w-full py-2"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="truck" className="container mt-32 mx-auto p-4 md:p-0">
              <div
                id="truckWrapper"
                className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto"
              >
                <div
                  id="truckImg"
                  className="bg-[url('../src/assets/drawnFoodTruck.jpg')] bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
                ></div>
                <div id="truckBody" className="bg-white w-full md:w-2/3 ">
                  <div
                    id="truckBodyOuter"
                    className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative bg-snow"
                  >
                    <div
                      id="truckBodyInner"
                      className="bg-snow lg:h-full p-6 -mt-6 md:mt-0 relative mb-6 md:mb-0 shadow-lg lg:-ml-6 lg:my-2 md:-mt-6 flex flex-wrap md:flex-wrap items-center"
                    >
                      <div>
                        <div
                          id="truckCardInfo"
                          className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left"
                        >
                          <h3>China Everywhere!</h3>
                          <p className="mb-0 mt-3 text-phoRed text-sm italic">
                            East? West? All Directions!
                          </p>
                          <hr className="w-1/4 md:ml-0 mt-4 border"></hr>
                        </div>
                        <div
                          id="truckCardText"
                          className="w-full lg:w-3/5 lg:px-3"
                        >
                          <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                            Introducing the newest addition to the food truck
                            scene- Get ready to experience authentic Chinese
                            cuisine on-the-go!
                          </p>
                          <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                            Our food truck may be coming soon to your area and
                            we can't wait to share our delicious dishes with
                            you. We offer a wide range of mouth-watering dishes
                            that are sure to satify any craving.
                          </p>
                          <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                            {" "}
                            Keep an eye out for our food truck and get ready to
                            be transported to the bustling streets of China.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-screen bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')] h-full"></div>
    </>
  );
}
