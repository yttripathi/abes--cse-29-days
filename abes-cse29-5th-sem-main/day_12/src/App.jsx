import React, { useState } from 'react'

const App = () => {
  const [task, settask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const addHandler = () => {
    if (editIndex !== null) {
      //update
      const updatedList = [...todoList];
      updatedList[editIndex] = task;
      setTodoList([...updatedList]);
      setEditIndex(null);
    } else {
      //add
      setTodoList([...todoList, task]);
    }
    settask("");
  }
  const deleteHandler = (index) => {
    console.log(todoList[index]);
    const updatedList = todoList.filter((d, i) => index != i);
    setTodoList([...updatedList]);
  }
  const editHandler = (index) => {
    settask(todoList[index]);
    setEditIndex(index);
  }
  return (
    <div>
      <h1>TODO List</h1>
      <input
        value={task}
        onChange={(e) => settask(e.target.value)}>
      </input>
      <button onClick={addHandler}>{editIndex !== null ? "UPDATE" : "ADD"}</button>
      <br></br>
      {todoList.map((task, index) =>
        <div>
          <span>{task}</span>
          <button onClick={() => editHandler(index)}>EDIT</button>
          <button onClick={() => deleteHandler(index)}>DELETE</button>
        </div>)}
    </div>
  )
}

export default App