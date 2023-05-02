import TodoItem from "./TodoItem";
import { Todo } from "../App";

interface Props {
  todos: Todo[];
  toggleComplete: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  removeCompletedTodos: () => void;
}

const TodoList = ({ todos, toggleComplete, removeTodo, removeCompletedTodos }: Props) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
      <button className="border rounded-lg p-2 ml-2 bg-blue-600 hover:bg-blue-500 text-white mt-4" onClick={removeCompletedTodos}>Nettoyer</button>
    </>
  );
};

export default TodoList;
