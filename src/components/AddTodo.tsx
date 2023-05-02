import { useState } from "react";

interface Props {
  createTodo: (input: string) => Promise<void>;
}

export const AddTodo = ({ createTodo }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    await createTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}  className="flex items-center justify-between mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Nouvelle Todo..."
        className="border rounded-lg w-full p-2 text-xl"        
      />
      <button className="border rounded-lg p-2 ml-2 bg-blue-600 text-white">Ajouter</button>
    </form>
  );
};
