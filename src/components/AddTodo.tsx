import { useRef, useState } from "react";

interface Props {
  createTodo: (input: string) => Promise<void>;
}

export const AddTodo = ({ createTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    if (!inputValue) {
      return;
    }
    await createTodo(inputValue);

    inputRef.current?.focus();
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between mb-4"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Nouvelle Todo..."
        className="border rounded-lg w-full p-2 text-xl"
      />
      <button className="border rounded-lg p-2 ml-2 bg-blue-600 text-white hover:bg-blue-500">
        Ajouter
      </button>
    </form>
  );
};
