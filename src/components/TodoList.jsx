import TodoItem from "./TodoItem";

export default function TodoList({ filteredTodos, onDelete, onComplete }) {
  return (
    <>
      {filteredTodos.length === 0 ? (
        <p>No todos yet...</p>
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
    </>
  );
}
