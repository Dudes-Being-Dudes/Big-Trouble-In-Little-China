import takeout from "../assets/takeout.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const { email, setEmail } = useState();
  const { agree, setAgree } = useState();
  return (
    <div className={styles.footer}>
      <div
        id="container"
        className=" bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')] pt-2"
      >
        <div className={styles.footer1} id="footer1">
          <div className="flex md:flex-row border-2 border-red-400 bg-teal-200 sm:flex-col items-center my-12">
            <img className="sm:hidden md:block" src={takeout} />
            <div className="flex flex-col items-center md:border-r-2">
              <h3 className="my-6 text-2xl font-bold">NEWS AND OFFERS</h3>
              <form
                className="w-70 ml-12"
                onSubmit={async (e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
                <button
                  className="ml-4 bg-phoRed text-white p-2 "
                  type="submit"
                >
                  Submit
                </button>
                <div className="mt-2 mb-6">
                  <input
                    type="checkbox"
                    placeholder="set agreement"
                    value={agree}
                    onChange={() => {
                      setAgree(!agree);
                    }}
                  ></input>{" "}
                  <small className="">
                    By signing up you are agreeing to receive marketing updates
                    from China Center.
                  </small>
                </div>
              </form>
            </div>
            <div className=" flex flex-col items-center">
              <h3 className="text-2xl font-bold ">GET SOCIAL</h3>
              <div className="ml-2">
                <a
                  className="text-black bg-white mx-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.yelp.com/biz/china-center-restaurant-salinas"
                >
                  <FontAwesomeIcon
                    icon={faYelp}
                    className=" rounded-full text-3xl px-3 py-2.5 mr-1 hover:text-white hover:bg-black"
                  />
                </a>
                <a
                  className="text-black bg-white mx-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/search?q=china+center+restaurant&ei=zWWyY82UOfiqqtsPtv6BiAw&gs_ssp=eJzj4tZP1zcsi89LLjLOMmC0UjWosDCwSElLM7ZIszBLMrVMSrMyqEhONTA3STKzNE2yTDEyNTbzEk_OyMxLVEhOzStJLVIoSi0uSSwtSswrAQB04xgo&oq=china+center+restaurant&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgsILhCABBDHARCvATIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgoIABBHENYEELADOgQIABBDOgUIABCRAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBCxAxCDAToKCC4QxwEQ0QMQQzoGCAAQChBDOg0ILhCxAxCDARDUAhBDOhAILhCxAxCDARDHARDRAxBDOgsILhCABBCxAxCDAToKCAAQsQMQgwEQQzoLCAAQgAQQsQMQyQM6EQguEIAEELEDEIMBEMcBEK8BOg4IABCABBCxAxCDARDJAzoLCC4QrwEQxwEQgAQ6DgguELEDEIMBEMcBENEDOg4ILhCxAxCDARDHARCvAToICAAQsQMQgwE6CwguEIAEEMcBENEDOg4ILhCABBDHARDRAxDUAkoECEEYAEoECEYYAFC6F1jxLWChNmgBcAB4AIAB2AGIAfsQkgEGMjIuMC4xmAEAoAEByAEIwAEB&sclient=gws-wiz-serp#ip=1"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className=" rounded-full text-3xl px-3 py-2.5 mr-1 hover:text-white hover:bg-black"
                  />
                </a>
                <a
                  className="text-black bg-white mx-1"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/pages/China%20Center%20Restaurant/115724488449948/"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className=" rounded-full text-3xl px-3 py-2.5 mr-1 hover:text-white hover:bg-black"
                    href="https://www.facebook.com/pages/China%20Center%20Restaurant/115724488449948/"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="footer2" className="bg-black text-white flex py-12">
          <div className="flex gap-x-8 ml-4">
            <a className={styles.link} href="/careers">
              Careers
            </a>
            <a className={styles.link} href="/faqs">
              Frequently Asked Questions
            </a>
            <a className={styles.link} href="/covid19">
              Covid-19 Policy
            </a>
            <a>@Copyright China Center</a>
          </div>
        </div>
      </div>
    </div>
  );
}
