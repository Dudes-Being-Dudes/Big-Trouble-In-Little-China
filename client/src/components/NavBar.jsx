import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-fixed bg-cover bg-[url('../src/assets/greatwall.PNG')]">
        <div class=" bg-gradient-to-b from-black to-transparent h-16 opacity-60 w-full "></div>
        <div class="flex items-center gap-x-32 h-72">
          <div class="flex justify-between items-center">
            <Link className={styles.heady} to="/">
              China Center
            </Link>
          </div>
          <FontAwesomeIcon
            id="hamburger-button"
            className="text-3xl text-white cursor-pointer lg:hidden block absolute right-5 hover:text-phoRed"
            onClick={() => {
              setOpen(!open);
            }}
            icon={faBars}
          />

          <div
            className="flex flex-row gap-x-12 md:flex md:items-center z-[-1] md:z-auto md:static 
        absolute w-full left-0  md:w-full md:py-0 py-4 md:pl-0 pl-7 top-[-400px] transition-all ease-in duration-500"
          >
            {" "}
          </div>
          <div className="flex flex-row items-center gap-x-4 text-xl items-center">
            {" "}
            <Link className={styles.link} to="/menu">
              MENU
            </Link>
            <Link className={styles.link} to="/info">
              LOCATION
            </Link>
            <Link className={styles.link} to="/story">
              ABOUT US
            </Link>
          </div>

          <div class="flex gap-x-1 mr-48">
            {" "}
            <Link className={styles.link2} to="/specials">
              SPECIALS
            </Link>
            <Link className={styles.link2} to="/info">
              CONTACT US
            </Link>
          </div>
        </div>{" "}
      </div>

      {open && (
        <section
          id="mobile-menu"
          class="sticky top-0 bg-phoRed w-full text-5xl flex-col
         justify-content-center origin-top animate-open-menu z-index:10"
        >
          <button
            className="text-8xl self-end px-6 text-white"
            onClick={() => {
              setOpen(!open);
            }}
          >
            &times;
          </button>
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <Link
              className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
              to="/menu"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Menu
            </Link>
            <Link
              className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
              to="/info"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Location
            </Link>
            <Link
              className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
              to="/story"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About Us
            </Link>
            <Link
              className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
              to="/specials"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Lunch Special
            </Link>
            <Link
              className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
              to="/info"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Contact Us
            </Link>
          </nav>
        </section>
      )}
    </>
  );
}
