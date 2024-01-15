// App.tsx

import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  DatePicker,
  Row,
  theme,
} from "antd";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import "./App.css";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const containerStyle = {
    backgroundColor: isDarkMode ? "#1a1a1a" : "white", // Set background color based on dark mode
  };

  const navBarStyle = {
    background: isDarkMode ? "#1a1a1a" : "white", // Set background color for NavBar in dark mode
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <NavBar
        onClick={() => {
          setIsDarkMode((previousValue) => !previousValue);
        }}
      />

      <Row style={containerStyle} gutter={4}>
        <Col span={5} style={{ paddingLeft: '20px', paddingRight: '10px' }}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </Col>
        <Col span={19}>
          <GameGrid selectedGenre={selectedGenre}/>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default App;
