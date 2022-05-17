import { useState } from "react";
import { Form } from "./components/form/Form";
import { Container } from "./components/tableContainer/Container";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    //setCount(count + 1);
  };
  const decreaseCount = () => {
    //setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App with out Redux</h1>
      <Container />
      <Form />
    </div>
  );
}

export default App;
