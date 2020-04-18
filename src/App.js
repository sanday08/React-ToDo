import React, { useState } from "react";
import List from "./components/List";
import Heading from "./components/Heading";
import Form from "./components/Form";
function App() {
  const [todoList, setTodoList] = useState([]);

  function clickHandle(task) {
    if (task !== "")
      setTodoList((preValue) => {
        return [...preValue, task];
      });
  }

  function deleteItem(id) {
    console.log(id);
    // var otr = todoList;
    // console.log(otr);

    // otr = otr.filter((item, index) => {
    //   return index !== id;
    // });
    // console.log(otr);
    setTodoList((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <Form clickHandle={clickHandle} />
      <ul>
        {todoList.map((item, index) => {
          return (
            <List key={index} deleteItem={deleteItem} id={index} value={item} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
