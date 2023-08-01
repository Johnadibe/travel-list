import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ParkingList from "./components/ParkingList";
import Stats from "./components/Stats";

export default function App() {
  // State for the travel list items that would be storing whenever we add a new item
  const [items, setItems] = useState([]);

  // Function to handle the add items
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Function to handle the delete items
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length === 0) return;
    window.confirm("Are you sure you want to delete all items?");
    setItems([]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}
