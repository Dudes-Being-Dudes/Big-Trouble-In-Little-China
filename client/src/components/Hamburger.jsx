import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Hamburger = (props) => {
  let Links = [
    { name: "MENU", link: "/" },
    { name: "LOCATION", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "LUNCH SPECIAL", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];
  return (
    <FontAwesomeIcon
      className="text-3xl cursor-pointer md:hidden block absolute right-5 hover:text-phoRed"
      icon={faBars}
    />
  );
};

export default Hamburger;
