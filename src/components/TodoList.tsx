import TodoItem from './TodoItem';
import { Todo } from '../App';

interface Props {
  todos: Todo[];
  toggleComplete: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleComplete, removeTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;