import { useState } from "react";
import AddItemSection from "./components/AddItemSection";
import ListSection from "./components/ListSection";

export interface item {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  let [toDoList, setToDoList] = useState<item[]>([]);

  const addItemToDoList = (newItem: string) => {
    let newToDoList: item = {
      id: crypto.randomUUID(),
      text: newItem,
      completed: false,
    };
    setToDoList([...toDoList, newToDoList]);
  };

  const deleteItemToDoList = (id: string) => {
    toDoList.forEach((item, index, array) => {
      if (item.id === id) {
        let newToDoList = array;
        newToDoList.splice(index, 1);
        setToDoList([...newToDoList]);
      }
    });
  };

  return (
    <>
      <AddItemSection onAdd={addItemToDoList}></AddItemSection>
      <ListSection
        onDelete={deleteItemToDoList}
        toDoList={toDoList}
      ></ListSection>
    </>
  );
}

export default App;
