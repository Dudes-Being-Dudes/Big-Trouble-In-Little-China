import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { Navigate, useNavigate } from "react-router-dom";

export default function MenuDropdown() {
  const navigate = useNavigate();
  return (
    <div className="z-index:-1 flex justify-center mb-2">
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        align="center"
        title="Categories"
        className="mt-2 btn btn-secondary z-index:-1"
      >
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/1");
          }}
        >
          Appetizers
        </Dropdown.Item>
        <Dropdown.Item
          className="noBull"
          onClick={() => {
            navigate("/categories/2");
          }}
        >
          Wontons, Noodles, Soup
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/3");
          }}
        >
          Fried Rice
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/4");
          }}
        >
          Chow Mein
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/5");
          }}
        >
          Beef
        </Dropdown.Item>

        <Dropdown.Item
          onClick={() => {
            navigate("/categories/6");
          }}
        >
          Chicken
        </Dropdown.Item>
        <Dropdown.Item
          className="noBull"
          onClick={() => {
            navigate("/categories/7");
          }}
        >
          Vegetarian
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/8");
          }}
        >
          Chop Suey
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/9");
          }}
        >
          Pork
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/10");
          }}
        >
          From the Sea
        </Dropdown.Item>

        <Dropdown.Item
          onClick={() => {
            navigate("/categories/11");
          }}
        >
          Combination Plate (Individual)
        </Dropdown.Item>
        <Dropdown.Item
          className="noBull"
          onClick={() => {
            navigate("/categories/12");
          }}
        >
          Chinese Dinner (Family Style)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/13");
          }}
        >
          Lunch Special
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/14");
          }}
        >
          Beer
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/15");
          }}
        >
          Drinks
        </Dropdown.Item>

        <Dropdown.Item
          onClick={() => {
            navigate("/categories/16");
          }}
        >
          Sides
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
