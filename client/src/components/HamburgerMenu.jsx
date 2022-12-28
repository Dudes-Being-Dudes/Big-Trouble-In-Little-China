import { Link } from "react-router-dom";
import { useState } from "react";
const Hamboiger = () => {
  const [open, setOpen] = useState(false);
  console.log("open in hamboiger", open);
  return (
    <section
      id="mobile-menu"
      class="absolute top-0 bg-phoRed w-full text-5xl flex-col
         justify-content-center origin-top animate-open-menu"
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
  );
};

export default Hamboiger;
