import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
const TodosLogic = () => {
  const [todos, setTodos] = useState([
    // ...
  ]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodosLogic;
