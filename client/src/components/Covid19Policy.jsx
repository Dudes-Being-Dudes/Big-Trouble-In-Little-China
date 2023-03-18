import React from "react";
import styles from "../styles/Footer_Links.module.css";
const Covid19Policy = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <h1 className={styles.heading}>Covid-19 Policy</h1>
      </div>
      <div className={styles.body}>
        <div className="p-4 bg-snow m-10 rounded text-black"></div>
      </div>
    </>
  );
};

export default Covid19Policy;
