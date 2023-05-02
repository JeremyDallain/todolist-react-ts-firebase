import { Todo } from "../App";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  todo: Todo;
  toggleComplete: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}

const style = {
  li: "flex items-center justify-between py-2 border-b",
  liComplete: "flex items-center justify-between py-2 border-b text-gray-500",
  textComplete: "text-xl ml-4 line-through",
  text: "text-xl ml-4",
};

const TodoItem = ({ todo, toggleComplete, removeTodo }: Props) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className="flex items-center cursor-pointer">
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed}
          className="form-checkbox text-blue-500 cursor-pointer"
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => removeTodo(todo.id)}>{<FaRegTrashAlt color="crimson" fontSize="1.1em"/>}</button>
    </li>
  );
};

export default TodoItem;
