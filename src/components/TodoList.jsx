import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filter,
  filteredTodos,
  onDelete,
  onComplete,
}) {
  return (
    <div className="">
      {todos.length === 0 ? (
        <div className="text-center py-8 text-base-content/60">
          <p className="text-lg">No todos yet...</p>
          <p className="text-sm mt-2">Add one above to get started!</p>
        </div>
      ) : filter === "active" && filteredTodos.length === 0 ? (
        <div className="text-center py-8 text-base-content/60">
          <p className="text-lg">No active todos</p>
          <p className="text-sm mt-2">Great job! Everything is complete 🎉</p>
        </div>
      ) : filter === "completed" && filteredTodos.length === 0 ? (
        <div className="text-center py-8 text-base-content/60">
          <p className="text-lg">No completed todos</p>
          <p className="text-sm mt-2">Complete some tasks to see them here</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todoItem={todo.todoItem}
              isCompleted={todo.isCompleted}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
