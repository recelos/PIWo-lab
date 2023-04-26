import { useState } from "react";

const Main = (props) => {
  const todoList = props.toDoList;
  const setToDoList = props.setTodoList;

  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const listOfTodosHtml = todoList.map(it => <p>{it}</p>);

  const handleAddNewTodo = () => {
    setToDoList(todoList.concat(newTodo));
    setNewTodo("");
  }
  return (<section>
        <input value={ newTodo } onChange={ handleNewTodo }/>
        <button onClick={handleAddNewTodo}>Add</button>

        {listOfTodosHtml}
    </section>);
}

export default Main;