import { createStore } from "easy-peasy";
import { items } from "./models/items";
import { category } from "./models/category";
const store = createStore({
  items,
  category,
});

export default store;
