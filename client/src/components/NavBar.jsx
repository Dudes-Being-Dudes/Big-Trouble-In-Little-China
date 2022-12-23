import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

import styles from "../styles/Navbar.module.css";
import Hamburger from "./Hamburger";

export default function NavBar() {
  return (
    <>
      {" "}
      <div class=" bg-gradient-to-b from-black to-transparent h-16 opacity-60 w-full "></div>
      <div class="flex items-center gap-x-32 mb-6 h-24">
        <div class="flex justify-between items-center">
          <h3 class="text-black ml-6 sm:ml-24">China Center</h3>
        </div>
        <Hamburger />

        <div
          className="flex flex-row gap-x-12 justify-between md:flex md:items-center z-[-1] md:z-auto  md:static 
        absolute w-full left-0 md:w-full md:py-0 py-4 md:pl-0 pl-7 top-[-400px] transition-all ease-in duration-500"
        >
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

          <div class="flex gap-x-1 mr-16">
            {" "}
            <Link className={styles.link2}>LUNCH SPECIAL</Link>
            <Link className={styles.link2} to="/info">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
