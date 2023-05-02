import { useState, useEffect } from "react";
import { addTodo, getTodos, updateTodo, deleteTodo, deleteCompletedTodos } from "./services/firebase";
import { TodoCounter } from "./components/TodoCounter";
import { AddTodo } from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Footer } from "./components/Footer";

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

  const removeCompletedTodos = async () => {
    await deleteCompletedTodos();
  };

  return (
    <div className="flex flex-col min-h-screen max-w-lg w-full m-auto pt-12">
      <main className="flex-grow px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todos
        </h1>
        <AddTodo createTodo={createTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          removeCompletedTodos={removeCompletedTodos}
        />
        <TodoCounter count={todos.length} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
