import { useState } from "react";
import "./App.css";
import { Col, DatePicker, Row } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Row className="bg-red-400">Nav</Row>
      <Row>
        <Col span={12} className="bg-amber-300 aside">
          Aside
        </Col>
        <Col flex="auto" className="bg-blue-500">
          Main
        </Col>
      </Row>
      <h1 className="text-3xl font-bold underline bg-gray-500">Hello world!</h1>
      <DatePicker />
    </>
  );
}

export default App;
