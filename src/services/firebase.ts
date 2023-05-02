import { db } from '../config/firebase';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  QuerySnapshot,
  where,
  getDocs,
} from 'firebase/firestore';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const getTodos = (callback: (todos: Todo[]) => void) => {
  const q = query(collection(db, 'todos'));
  return onSnapshot(q, (querySnapshot: QuerySnapshot) => {
    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id } as Todo);
    });
    callback(todos);
  });
};

export const addTodo = async (text: string): Promise<void> => {
  await addDoc(collection(db, 'todos'), {
    text,
    completed: false,
  });
};

export const updateTodo = async (id: string, completed: boolean): Promise<void> => {
  await updateDoc(doc(db, 'todos', id), {
    completed,
  });
};

export const deleteTodo = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'todos', id));
};

export const deleteCompletedTodos = async (): Promise<void> => {
  const q = query(collection(db, 'todos'), where('completed', '==', true));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((todo) => {
    deleteDoc(doc(db, 'todos', todo.id));
  });
}