export default function TodoItem({
  id,
  todoItem,
  isCompleted,
  onDelete,
  onComplete,
}) {
  return (
    <li className="flex items-center gap-3 p-3 bg-base-200 rounded-lg">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onComplete(id)}
        className="checkbox checkbox-primary"
      />
      <span
        className={`flex-1 ${isCompleted ? "line-through opacity-50" : ""}`}
      >
        {todoItem}
      </span>
      <button className="btn btn-sm btn-success" onClick={() => onComplete(id)}>
        {isCompleted ? "Undo" : "Complete"}
      </button>
      <button className="btn btn-sm btn-error" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
