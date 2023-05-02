interface Props {
  count: number;
}

export const TodoCounter = ({ count }: Props) => {
  const text = `Vous avez ${count} ${count > 1 ? "Tâches" : "Tâche"}`;
  return <p className="text-center p-2 mt-4">{text}</p>;
};
