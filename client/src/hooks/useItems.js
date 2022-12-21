import { useStoreState, useStoreActions } from "easy-peasy";

export default function useItems() {
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);
  return {
    items,
    fetchItems,
  };
}
