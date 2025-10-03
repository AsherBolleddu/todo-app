export default function TodoFilters({
  itemsLeft,
  setFilter,
  onClearCompleted,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <span className="text-sm font-medium">{itemsLeft} items left</span>
      <div className="join">
        <button
          className="btn btn-sm join-item"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="btn btn-sm join-item"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="btn btn-sm join-item"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <button className="btn btn-sm btn-ghost" onClick={onClearCompleted}>
        Clear completed
      </button>
    </div>
  );
}
