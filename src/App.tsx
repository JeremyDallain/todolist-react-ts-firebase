import { useState, useEffect } from "react";
import { addTodo, getTodos, updateTodo, deleteTodo } from "./services/firebase";
import { TodoCounter } from "./components/TodoCounter";
import { AddTodo } from "./components/AddTodo";
import TodoList from "./components/TodoList";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsubscribe = getTodos((todos: Todo[]) => {
      setTodos(todos);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createTodo = async (input: string) => {
    await addTodo(input);
  };

  const toggleComplete = async (todo: Todo) => {
    await updateTodo(todo.id, !todo.completed);
  };

  const removeTodo = async (id: string) => {
    await deleteTodo(id);
  };

  return (
    <div className="max-w-lg w-full p-6 m-auto mt-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 p-2 mb-8">Todos</h1>
      <AddTodo createTodo={createTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
      <TodoCounter count={todos.length} />
    </div>
  );
};

export default App;
