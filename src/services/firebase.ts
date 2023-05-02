import { db } from '../firebase-config';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  QuerySnapshot,
} from 'firebase/firestore';

// Définissez l'interface Todo pour le typage
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Récupérez les todos
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

// Ajoutez un todo
export const addTodo = async (text: string): Promise<void> => {
  await addDoc(collection(db, 'todos'), {
    text,
    completed: false,
  });
};

// Mettez à jour un todo
export const updateTodo = async (id: string, completed: boolean): Promise<void> => {
  await updateDoc(doc(db, 'todos', id), {
    completed,
  });
};

// Supprimez un todo
export const deleteTodo = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'todos', id));
};