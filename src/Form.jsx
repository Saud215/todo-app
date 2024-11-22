import { useState } from "react";
import { toast } from "react-toastify";
const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(newItemName);
    if (!newItemName) {
      toast.error("please enter a valid value");
      return;
    }

    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>GrocBud- the toDo list</h4>
      <div className="form-control">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
