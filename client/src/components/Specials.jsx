import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPepperHot,
  faShrimp,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
export default function Specials() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>Specials</h1>
      </div>
      <div id="comboPlates">
        <h2 className="font-bold text-red-600"> Combination Plates</h2>
        <h6 className="font-bold text-red-600">
          (Dine-In comes with a small wonton soup)
        </h6>
        <div className="border-4 border-dotted border-red-400 grid grid-cols-2 grid-rows-2 p-4">
          <div
            id="A"
            className="border-r-2 border-b-2 border-solid border-red-400 p-2"
          >
            <div className="flex items-center justify-center space-x-12">
              <h4 className="font-bold text-phoRed">A</h4>
              <p>$13.95</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>CHICKEN CHOW MEIN</xs>
              <xs>PORK FRIED RICE</xs>
              <xs>SWEET & SOUR PORK</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faShrimp}
                  title="contains shrimp"
                  className="text-orange-600"
                />
                FRIED PRAWNS
              </xs>
            </div>
          </div>
          <div id="B" className="border-b-2 border-solid border-red-400 p-2">
            <div className="flex items-center justify-center space-x-12">
              <h4 className="font-bold text-phoRed">B</h4>
              <p>$14.95</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>VEGETABLE BEEF</xs>
              <xs>PORK FRIED RICE</xs>
              <xs>EGG ROLL</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                FRIED PRAWNS
              </xs>
            </div>
          </div>
          <div id="C" className="border-r-2 border-solid border-red-400 p-2">
            <div className="flex items-center justify-center space-x-12">
              <h4 className="font-bold text-phoRed">C</h4>
              <p>$14.95</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>BROCCOLI BEEF</xs>
              <xs>PORK FRIED RICE</xs>
              <xs>SWEET & SOUR PORK</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                FRIED PRAWNS
              </xs>
            </div>
          </div>
          <div id="D" className="border-solid border-red-400 p-2">
            <div className="flex items-center justify-center space-x-12">
              <h4 className="font-bold text-phoRed">D</h4>
              <p>$14.95</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>
                {" "}
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-[#c6952b]"
                  title="contains nut"
                />
                ALMOND CHICKEN
              </xs>
              <xs>PORK FRIED RICE</xs>
              <xs>SWEET & SOUR PORK</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                FRIED PRAWNS
              </xs>
            </div>
          </div>
        </div>
      </div>
      <div id="LunchSpecials" className="">
        <h2 className="font-bold text-red-600">
          Lunch Special (11:30 am. - 3:00 pm.)
        </h2>
        <h5 className="font-bold text-red-600">
          Choice of Steamed Rice or Pork Fried Rice
        </h5>
        <h6 className="font-bold text-red-600">
          (Dine-In comes with a small wonton soup)
        </h6>

        <div className="border-4 border-dotted border-red-400 grid grid-cols-1 grid-rows-1 p-4">
          <div className="flex">
            <ol>
              <li>BEEF OYSTER SAUCE</li>
              <li>SWEET & SOUR PORK</li>
              <li>ALMOND CHICKEN</li>
              <li>BEEF WITH BROCCOLI</li>
              <li>BEEF GREEN PEPPER</li>
              <li>CURRY CHICKEN</li>
              <li>CHICKEN or PORK CHOW MEIN W/ FRIED RICE</li>
              <li>CHICKEN BROCCOLI</li>

              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faPepperHot}
                  className="text-red-700"
                  title="spicy"
                />
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-[#c6952b]"
                  title="contains nut"
                />
                KUNG PAO CHICKEN or BEEF
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPepperHot}
                  className="text-red-700"
                  title="spicy"
                />
                GARLIC CHICKEN
              </li>
              <li>SWEET & SOUR CHICKEN</li>
              <li>BEEF or CHICKEN CHOP SUEY</li>
            </ol>
            <p>$11.95</p>
          </div>
          <div className="flex flex-end space-x-44">
            <ol>
              <li>SHRIMP VEGETABLE</li>
              <li>
                <FontAwesomeIcon
                  icon={faPepperHot}
                  className="text-red-700"
                  title="spicy"
                />
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                GARLIC SHRIMP
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPepperHot}
                  className="text-red-700"
                  title="spicy"
                />
                MONGOLIAN BEEF
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                SEAFOOD VEGETABLE
              </li>
              <li>FISH FILLET VEGETABLE</li>
              <li>
                <FontAwesomeIcon
                  icon={faPepperHot}
                  className="text-red-700"
                  title="spicy"
                />
                GENERAL CHICKEN
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPepperHot}
                  className="text-red-700"
                  title="spicy"
                />
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-[#c6952b]"
                  title="contains nut"
                />
                KUNG PAO FISH FILLET
              </li>
              <li>ORANGE CHICKEN</li>
            </ol>
            <p>$12.95</p>
          </div>
        </div>
      </div>
      <div id="FamilyDinner" className="p-2">
        <h2 className="font-bold text-red-600 ">
          Family Dinner for Two or More
        </h2>
        <div className="border-4 border-dotted border-red-400 grid grid-cols-2 grid-rows-2 p-4">
          <div id="dinner1">
            <div className="flex items-center justify-center space-x-4">
              <h4 className="font-bold text-phoRed">No. 1</h4>
              <p>$31.90 + $15.95 PER PERSONS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>WONTON SOUP</xs>
              <xs>EGG ROLL</xs>
              <xs>SWEET & SOUR PORK</xs>
              <xs>FRIED WONTON</xs>
              <xs>PORK FRIED RICE</xs>
              <xs>PORK CHOW MEIN</xs>
              <xs className="font-medium text-md">FOR 3 PERSONS ADD :</xs>
              <xs>BEEF BROCCOLI</xs>
              <xs className="font-medium text-md">FOR 4 PERSONS ADD :</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faPepperHot}
                  title="spicy"
                  className="text-red-700"
                />
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-[#c6952b]"
                  title="contains nut"
                />
                KUNG PAO CHICKEN
              </xs>
            </div>
          </div>
          <div id="dinner2">
            <div className="flex items-center justify-center space-x-4">
              <h4 className="font-bold text-phoRed">No. 2</h4>
              <p>$31.90 + $15.95 PER PERSONS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>WONTON SOUP</xs>
              <xs>EGG ROLL</xs>
              <xs>SWEET & SOUR PORK</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                FRIED PRAWNS
              </xs>
              <xs>PORK FRIED RICE</xs>
              <xs>SPECIAL CHOW MEIN</xs>
              <xs className="font-medium text-md">FOR 3 PERSONS ADD :</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-[#c6952b]"
                  title="contains nut"
                />
                CHICKEN ALMOND
              </xs>
              <xs className="font-medium text-md">FOR 4 PERSONS ADD :</xs>
              <xs>BEEF BROCCOLI</xs>
            </div>
          </div>
          <div id="dinner3" className="">
            <div className="flex items-center justify-center space-x-4">
              <h4 className="font-bold text-phoRed">No. 3</h4>
              <p>$33.90 + $16.95 PER PERSONS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <xs>WONTON SOUP</xs>
              <xs>
                <FontAwesomeIcon
                  icon={faShrimp}
                  className="text-orange-600"
                  title="contains shrimp"
                />
                FRIED PRAWNS
              </xs>
              <xs>FRIED CHICKEN WINGS</xs>

              <xs>PORK FRIED RICE</xs>

              <xs className="font-medium text-md">
                EACH PERSON CHOOSES ONE ITEM BELOW :
              </xs>
              <div className="grid grid-cols-2 grid-rows-3 gap-x-2 flex justify-center items-center">
                <li>
                  <FontAwesomeIcon
                    icon={faBrain}
                    className="text-[#c6952b]"
                    title="contains nut"
                  />
                  CHICKEN ALMOND CHOW MEIN
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faShrimp}
                    className="text-orange-600"
                    title="contains shrimp"
                  />
                  SHRIMP CHOW MEIN
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPepperHot}
                    className="text-red-700"
                    title="spicy"
                  />
                  GARLIC CHICKEN
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPepperHot}
                    className="text-red-700"
                    title="spicy"
                  />
                  <FontAwesomeIcon
                    icon={faBrain}
                    className="text-[#c6952b]"
                    title="contains nut"
                  />
                  KUNG PAO BEEF
                </li>
                <li>BEEF WITH BROCCOLI</li>
                <li>ORANGE CHICKEN</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
