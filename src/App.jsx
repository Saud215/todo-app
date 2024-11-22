import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const defaultItems = JSON.parse(localStorage.getItem("items") || "[]");
const App = () => {
  const [items, setItems] = useState(defaultItems);

  const setToLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const addItem = (itemName) => {
    const newItem = { id: nanoid(), completed: false, name: itemName };
    const newItems = [...items, newItem];
    setItems(newItems);
    setToLocalStorage(newItems);
    // console.log(items);
    toast.success("item added");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setToLocalStorage(newItems);
    toast.success("item deleted");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setToLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
