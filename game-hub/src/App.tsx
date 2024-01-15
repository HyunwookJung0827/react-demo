// App.tsx

import React from 'react';
import { useState } from 'react';
import { Button, Card, Col, ConfigProvider, DatePicker, Row, theme } from 'antd';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const containerStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : 'white', // Set background color based on dark mode
  };

  const navBarStyle = {
    background: isDarkMode ? '#1a1a1a' : 'white', // Set background color for NavBar in dark mode
  };

  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <NavBar onClick={() => {
        setIsDarkMode((previousValue) => !previousValue);
      }} style={navBarStyle} darkMode={isDarkMode} />
      
      <Row style={containerStyle}>
        <Col span={12} className="bg-amber-300 aside">
          Aside
        </Col>
        <Col flex="auto">
          <GameGrid />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default App;
