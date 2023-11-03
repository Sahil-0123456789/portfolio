import { useState } from "react";
import "../AddItem.css";
interface Props {
  onAdd: (addedText: string) => void;
}

function AddItemSection({ onAdd }: Props) {
  let [itemAdded, setItemAdded] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    itemAdded && onAdd(itemAdded);
    setItemAdded("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div id="addItemHelp" className="form-text">
          Enter an item to add to your to do list
        </div>
        <input
          type="todo"
          className="form-control"
          id="addItemFormControl"
          aria-describedby="addItemHelp"
          value={itemAdded}
          onChange={(e) => setItemAdded(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" id="submitButton">
        Add Item
      </button>
    </form>
  );
}

export default AddItemSection;
