import { useState } from "react";
import "./App.css";
import { Button, Card, Col, ConfigProvider, DatePicker, Row, theme } from "antd";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  const [count, setCount] = useState(0);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
   };
  return (
    <ConfigProvider theme={{
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
      <NavBar onClick={handleClick}></NavBar>
      <Row>
        <Col span={12} className="bg-amber-300 aside">
          Aside
        </Col>
        <Col flex="auto" className="bg-blue-500">
          <GameGrid />
        </Col>
      </Row>
      <h1 className="text-3xl font-bold underline bg-gray-500">Hello world!</h1>
      <DatePicker />
      <Card style={{ width: "max-content" }}>
      <Button onClick={handleClick}>
        Change Theme to {isDarkMode ? "Light" : "Dark"}
      </Button>
    </Card>
    </ConfigProvider>
  );
}

export default App;
