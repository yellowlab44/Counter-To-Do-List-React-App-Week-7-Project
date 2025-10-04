import { useState, useMemo } from "react";
import CounterList from "./components/CounterList.jsx";
import NewCounterForm from "./components/NewCounterForm.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  // Persist counters in localStorage
  const [counters, setCounters] = useLocalStorage("counters:v1", []);

  // Form visibility (example of conditional rendering)
  const [showForm, setShowForm] = useState(true);

  const totalCount = useMemo(
    () => counters.reduce((sum, c) => sum + c.value, 0),
    [counters]
  );

  // Create
  function handleAddCounter({ name, step }) {
    const id = crypto.randomUUID();
    setCounters((prev) => [
      ...prev,
      { id, name: name.trim(), step: Number(step), value: 0 },
    ]);
  }

  // Update helpers
  function updateValue(id, delta) {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, value: c.value + delta } : c))
    );
  }

  function resetValue(id) {
    setCounters((prev) => prev.map((c) => (c.id === id ? { ...c, value: 0 } : c)));
  }

  function deleteCounter(id) {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  }

  function renameCounter(id, nextName) {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name: nextName } : c))
    );
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Multi‑Counter</h1>
        <div className="summary">
          <span className="badge">Counters: {counters.length}</span>
          <span className="badge">Total: {totalCount}</span>
          <button
            className="btn btn--ghost"
            onClick={() => setShowForm((s) => !s)}
            aria-expanded={showForm}
          >
            {showForm ? "Hide Form" : "New Counter"}
          </button>
        </div>
      </header>

      {showForm && (
        <NewCounterForm onAdd={handleAddCounter} />
      )}

      <main>
        <CounterList
          counters={counters}
          onIncrement={(id) => {
            const c = counters.find((c) => c.id === id);
            updateValue(id, c.step);
          }}
          onDecrement={(id) => {
            const c = counters.find((c) => c.id === id);
            updateValue(id, -c.step);
          }}
          onReset={resetValue}
          onDelete={deleteCounter}
          onRename={renameCounter}
        />
      </main>

      <footer className="app__footer">
        <p>Built with React functional components, hooks, props, and localStorage.</p>
      </footer>
    </div>
  );
}