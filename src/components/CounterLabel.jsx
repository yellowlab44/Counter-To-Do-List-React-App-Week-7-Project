import { useState, useEffect } from "react";

export default function CounterLabel({ name, value, onRename }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);

  // Keep draft in sync if name changes from parent
  useEffect(() => setDraft(name), [name]);

  function save() {
    const trimmed = (draft || "").trim();
    if (trimmed) onRename(trimmed);
    setEditing(false);
  }

  return (
    <header style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center" }}>
      {editing ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 8 }}>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && save()}
            autoFocus
            style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
          />
          <button onClick={save} style={{ padding: "8px 10px", borderRadius: 8 }}>Save</button>
          <button onClick={() => setEditing(false)} style={{ padding: "8px 10px", borderRadius: 8 }}>Cancel</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: 8, alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <div style={{ opacity: 0.7 }}>Value: {value}</div>
          </div>
          <button onClick={() => setEditing(true)} style={{ padding: "8px 10px", borderRadius: 8 }}>
            Rename
          </button>
        </div>
      )}
    </header>
  );
}