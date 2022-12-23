// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import styles from "../styles/Navbar.module.css";
// const Hamburger = (props) => {
//   const initApp = () => {
//     const hamburgerBtn = document.getElementById("hamburger-button");
//     const mobileMenu = document.getElementById("mobile-menu");

//     const toggleMenu = () => {
//       mobileMenu.classList.toggle("hidden");
//       mobileMenu.classList.toggle("flex");
//     };
//   };
//   return (
//     <div>
//       <section
//         id="mobile-menu"
//         className="absolute top-0 bg-black w-full text-5xl flex flex-col
//          justify-content-center origin-top animate-open-menu hidden"
//       >
//         <button className="text-8xl self-end px-6">&times;</button>
//         <nav
//           className="flex flex-col min-h-screen items-center py-8"
//           aria-label="mobile"
//         >
//           <Link
//             className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
//             to="/menu"
//           >
//             Menu
//           </Link>
//           <Link
//             className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
//             to="/info"
//           >
//             Location
//           </Link>
//           <Link
//             className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
//             to="/story"
//           >
//             About Us
//           </Link>
//           <Link
//             className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
//             to="/specials"
//           >
//             Lunch Special
//           </Link>
//           <Link
//             className="no-underline w-full text-center py-6 hover:opacity-90 text-white"
//             to="/info"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </section>
//     </div>
//   );
// };

// export default Hamburger;
