import { useState } from "react";
import "./App.css";
import Auth from "./Auth/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Auth />
    </>
  );
}

export default App;
