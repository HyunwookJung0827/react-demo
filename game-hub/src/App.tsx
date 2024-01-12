import { useState } from "react";
import "./App.css";
import { DatePicker } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-gray-500">Hello world!</h1>
      <DatePicker />
    </>
  );
}

export default App;
