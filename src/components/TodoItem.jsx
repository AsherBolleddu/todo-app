export default function TodoItem({
  id,
  todoItem,
  isCompleted,
  onDelete,
  onComplete,
}) {
  return (
    <li>
      <span className={isCompleted ? "checked" : ""}>{todoItem}</span> -{" "}
      <button onClick={() => onComplete(id)}>Completed</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
