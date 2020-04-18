import React, { useState } from "react";

function Form(props) {
  const [task, setTask] = useState("");
  function taskHandle(event) {
    const value = event.target.value;
    setTask(value);
  }
  return (
    <div className="form">
      <input type="text" name="task" value={task} onChange={taskHandle} />
      <button
        onClick={() => {
          props.clickHandle(task);
          setTask("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
