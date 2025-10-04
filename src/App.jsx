// test:  
//export default function App() {
 // return <h1 style={{ padding: 20 }}>Hello from React ✅</h1>;
//}

//import { useState, useMemo } from "react";

//import components:
//import CounterList from "./components/CounterList.jsx";
import NewCounterForm from "./components/NewCounterForm.jsx";
//import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>Multi-Counter</h1>
      <p style={{ color: "#666" }}>Step 3 smoke test</p>
      <NewCounterForm onAdd={() => { /* temp no-op */ }} />
    </div>
  );
}
