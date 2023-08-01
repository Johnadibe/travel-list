import { useState } from "react";
import Item from "./Item";

export default function ParkingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  // SORT BY STATE
  // SORT 1
  const [sortBy, setSortBy] = useState("input"); // The input will be by default

  //
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); // we use localCompare method to sort Alphabetically

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* {items.map((item) => (  // Uising the items array*/}
        {sortedItems.map(
          (
            item // We will now use the sorted array
          ) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          )
        )}
      </ul>

      {/* SORT BY PART OR COMPONENT */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        {/* Button to clear the entire lists */}
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
