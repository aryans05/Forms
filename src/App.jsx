import React from "react";
import PagesSelector from "./PageSelector";

export default function App() {
  function handleDone(selected) {
    alert("Selected: " + (selected.length ? selected.join(", ") : "none"));
  }

  return (
    <div>
      <PagesSelector onDone={handleDone} />
    </div>
  );
}
