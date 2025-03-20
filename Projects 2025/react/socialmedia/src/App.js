import React, { useEffect } from "react";
import { authenticate } from "./api";

function App() {
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <div className="App">
      <h1>Social Analytics Dashboard</h1>
      <p>Fetching API data...</p>
    </div>
  );
}

export default App;
