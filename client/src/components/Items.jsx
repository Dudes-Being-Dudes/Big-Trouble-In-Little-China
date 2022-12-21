import React from "react";
import { useEffect } from "react";
import useItems from "../hooks/useItems";

export default function Items() {
  const { fetchItems, items } = useItems();
  useEffect(() => {
    fetchItems();
  }, []);
  return <div>{JSON.stringify(items)}</div>;
}
