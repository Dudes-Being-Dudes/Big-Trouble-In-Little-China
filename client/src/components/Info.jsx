import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export default function Info() {
  return (
    <div className="mt-6">
      <div className="flex justify-center items-center mb-6">
        <h3 className=" sm:opacity-0 md:opacity-100 ">Contact Us</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div>
          <iframe
            className="border ml-6 drop-shadow-md w-100 sm:w-5/6 sm:mb-6 z-index:-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.6380925436024!2d-121.65724138453214!3d36.70723368062673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808dff38f86b59bf%3A0xce074b695b9d2536!2sChina%20Center%20Restaurant!5e0!3m2!1sen!2sus!4v1671748943168!5m2!1sen!2sus"
            width="500"
            height="350"
          ></iframe>
        </div>
        <div className="ml-12 flex flex-col">
          <div>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white bg-phoRed rounded-full p-1 mr-4"
              />
              <div>
                {" "}
                <h6> Our Address</h6>
                <small>1453 N Main St, Salinas, CA 93906</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row mt-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white bg-phoRed rounded-full p-1 mr-4"
              />{" "}
              <div>
                <h6>Call Us</h6>
                <small>(831)-449-8068</small>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row mt-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white bg-phoRed rounded-full p-1 mr-4"
              />{" "}
              <div>
                <h6> Our Hours</h6>
                <small>Mon-Sat : 11:30 AM - 09:00 PM</small>
                <div>
                  <small>Sun : 12:00 PM - 08:30 PM</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
