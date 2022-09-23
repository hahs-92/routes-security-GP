import { useState } from "react";
import "./App.css";
import { Dashboard, Login } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />
      <Dashboard />
    </div>
  );
}

export default App;
