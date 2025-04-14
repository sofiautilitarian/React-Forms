import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form";
import ModuleSix from './ModuleSix';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ModuleSix />
    </div>
  );
}

export default App;
