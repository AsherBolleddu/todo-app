import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  filter,
  filteredTodos,
  onDelete,
  onComplete,
}) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet...</p>
      ) : filter === "active" && filteredTodos.length === 0 ? (
        <p>No active todos</p>
      ) : filter === "completed" && filteredTodos.length === 0 ? (
        <p>No completed todos</p>
      ) : (
        <ul>
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
