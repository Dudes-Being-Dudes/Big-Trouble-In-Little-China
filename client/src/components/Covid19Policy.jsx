import React from "react";
import styles from "../styles/Footer_Links.module.css";
const Covid19Policy = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <h1 className={styles.heading}>Covid-19 Policy</h1>
      </div>
      <div className={styles.body}>
        <div className="p-4 bg-snow m-10 rounded text-black">
          <p>
            Just a quick note to reassure you that we are doing all we can to
            keep you and our staff safe. We are following government guidelines,
            implementing key safety practices following our detailed risk
            assessment of our processes & will continue to adapt these as
            necessary.
          </p>
          <p>We are:</p>
          <ul className="list-disc">
            <li>checking our staff are well with daily health declarations</li>
            <li>increasing hand-washing</li>
            <li>regularly sanitising surfaces</li>
            <li>wearing masks where necessary</li>
          </ul>
          <p>
            We ask that all customers only visit the restaurant if they are
            feeling well, haven't had any symptoms and to their knowledge have
            not been in contact with anyone who has symptoms.
          </p>
        </div>{" "}
        <div className="justify-center items-center flex flex-col">
          <p>We hope to see you soon,</p>
          <p>China Center Restaurant</p>
        </div>
      </div>
    </>
  );
};

export default Covid19Policy;
