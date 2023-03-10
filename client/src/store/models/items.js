import { action, thunk } from "easy-peasy";
import axios from "axios";

export const items = {
  data: [],
  selectedItem: {},
  setItems: action((state, payload) => {
    state.data = payload;
  }),
  fetchItems: thunk(async (actions, payload) => {
    const { data } = await axios.get("/api/items", payload);
    actions.setItems(data);
  }),
  fetchItem: thunk(async (actions, payload) => {
    const { data } = await axios.get(`/api/items/${payload}`);
    actions.selectItem(data);
  }),
};
