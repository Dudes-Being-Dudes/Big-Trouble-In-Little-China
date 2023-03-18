import React from "react";
import styles from "../styles/Footer_Links.module.css";
const FAQs = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
      </div>
      <div className={styles.body}>
        <div className="p-4 bg-snow m-10 rounded text-black">
          <h2 className="font-extrabold text-4xl uppercase">
            Do you take reservations?
          </h2>
          <p className="ml-2 text-black">
            No, we only do first come first serve. If there is a specific table
            you want you will have to wait until it is available.
          </p>
          <h2 className="font-extrabold text-4xl uppercase">
            I have a food allergy...what can i eat on your menu?
          </h2>
          <p className="ml-2">
            All the food at China Center Restaurant is made fresh to order by
            our kitchen staff, with the exception of the french fries and
            bottled table sauces.
          </p>
          <p className="ml-2">
            If you have an allergy, even if it is not shown as being present in
            the meal you choose, please make sure staff is aware of the allergy.
            Not all ingredients are listed on our menu.
          </p>
          <p className="ml-2">
            We will be as flexible as possible in adapting our meals to suit
            your dietary requirements. Please note that because our food is made
            fresh each day, all allergens are present within the kitchen and we
            cannot guarantee that we will always be successful in removing them.
            Our staff are trained to deal with the allergen requests but there
            is always the possibility of human error. Thank you for
            understanding.
          </p>
          <h2 className="font-extrabold text-4xl uppercase">
            {" "}
            Substitutions on Combination plates | family dinners
          </h2>
          <p className="ml-2">
            As everything is made to order, we can substitute most options
            within similar items. Being a family restaurant and a kitchen on the
            smaller side, we usually can grant the request when its not busy
            however please understand changing a lot of the items will confuse
            the kitchen staff during busy hours and sometimes we will get the
            order wrong. Substitutions will also vary in pricing based on
            changing proteins, appetizers, and special entrees.
          </p>
          <p className=""></p>
        </div>
      </div>
    </>
  );
};

export default FAQs;
