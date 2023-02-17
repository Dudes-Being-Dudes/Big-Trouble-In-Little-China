import { useStoreState, useStoreActions } from "easy-peasy";

export default function useItems() {
  const items = useStoreState((state) => state.items.data);
  const fetchItems = useStoreActions((actions) => actions.items.fetchItems);
  const fetchItem = useStoreActions((actions) => actions.items.fetchItem);

  return {
    items,
    fetchItems,
    fetchItem,
  };
}
