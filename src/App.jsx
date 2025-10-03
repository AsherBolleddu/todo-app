import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import Header from "./components/Header";

function App() {
  const getInitalTodos = () => {
    try {
      const todos = window.localStorage.getItem("todos");
      return todos ? JSON.parse(todos) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  const initalTodos = getInitalTodos();
  const [todos, setTodos] = useState(initalTodos);
  const [counter, setCounter] = useState(() =>
    initalTodos.reduce((acc, curr) => Math.max(acc, curr.id), 0)
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    try {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error(error);
    }
  }, [todos]);

  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleComplete(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function handleAddTodo(text) {
    const newId = counter + 1;
    const newTodo = { id: newId, todoItem: text, isCompleted: false };
    setTodos((prev) => [...prev, newTodo]);
    setCounter(newId);
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));
  }

  const itemsLeft = todos.filter((todo) => !todo.isCompleted).length;
  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.isCompleted)
      : filter === "completed"
      ? todos.filter((todo) => todo.isCompleted)
      : todos;

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />
      <main className="flex-1 flex justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="card bg-base-100 shadow-x;">
            <div className="card-body">
              <TodoForm onAddTodo={handleAddTodo} />
              <div className="divider"></div>
              <TodoList
                todos={todos}
                filter={filter}
                filteredTodos={filteredTodos}
                onDelete={handleDelete}
                onComplete={handleComplete}
              />
              <div className="divider"></div>
              <TodoFilters
                setFilter={setFilter}
                itemsLeft={itemsLeft}
                onClearCompleted={clearCompleted}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
