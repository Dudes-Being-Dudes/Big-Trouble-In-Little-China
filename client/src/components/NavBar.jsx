import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  return (
    <>
      {" "}
      <div class="bg-gradient-to-b from-black to-transparent h-16 w-full  opacity-60"></div>
      <div class="flex items-center gap-x-32 mb-6 h-24">
        <div class="">
          <h3 class="text-black ml-32">China Center</h3>
        </div>
        <div class="flex flex-center gap-x-4 text-xl">
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
        <div class="flex gap-x-1">
          {" "}
          <Link className={styles.link2}>LUNCH SPECIAL</Link>
          <Link className={styles.link2} to="/info">
            CONTACT US
          </Link>
        </div>
      </div>{" "}
    </>
  );
}
