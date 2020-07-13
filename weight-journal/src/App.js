import React, { useState } from "react";
import "./App.css";

import Router from "./components/Router";
import Nav from "./components/Nav";
function App() {
  const [id, setId] = useState();

  return (
    <div className="App">
      <Nav />
      <Router id={id} setId={setId} />
    </div>
  );
}

export default App;
