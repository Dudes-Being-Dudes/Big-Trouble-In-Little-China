import React from "react";
import styles from "../styles/Footer_Links.module.css";
import { useNavigate } from "react-router-dom";
const Careers = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <h1 className={styles.heading}>Careers</h1>
      </div>
      <div className={styles.body}>
        <div className="p-4 bg-snow m-10 rounded text-black text-xl">
          <p>
            We pride ourselves on not being a corporate chain. We're a
            family-run business and we want this to shine through in everything
            we do; from the food we cook fresh daily, to the team we employ and
            train, to the way we engage with our customers.
          </p>
          <p>
            We are not machines and we encourage our staff to be themselves at
            work so they can feel happy, relaxed, and give our customers the
            best possible experience when they dine with us.
          </p>
          <p>
            If you think that you would be a good fit for China Center
            Restaurant, you can call or visit us at the restaurant and let us
            know!
          </p>
          <button
            onClick={async (e) => {
              navigate("/info");
            }}
            className="bg-phoRed p-2 rounded hover:bg-red-700"
          >
            More Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Careers;
