export default function TodoFilters({
  itemsLeft,
  setFilter,
  onClearCompleted,
}) {
  return (
    <div>
      <p>{itemsLeft} items left</p>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}
