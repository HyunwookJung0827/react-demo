import { useState } from "react";
import { Col, ConfigProvider, Row, Space, theme } from "antd";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import "./App.css";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const containerStyle = {
    backgroundColor: isDarkMode ? "#1a1a1a" : "white", // Set background color based on dark mode
  };

  return (
    <>
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        onClick={() => setIsDarkMode((previousValue) => !previousValue)}
      />
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,

          components: {
            Card: {
              colorBgContainer: isDarkMode ? "#1f1f1f" : "#f5f5f5",
            },
          },
        }}
      >
        <Space>
          <Row style={containerStyle} gutter={4}>
            <Col span={5} style={{ paddingLeft: "20px", paddingRight: "10px" }}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </Col>
            <Col span={19}>
              <Row justify="start">
                <GameHeading gameQuery={gameQuery} />
              </Row>
              <Row justify="start" style={{ paddingBottom: "20px" }}>
                <Col style={{ paddingRight: "20px" }}>
                  <PlatformSelector
                    selectedPlatform={gameQuery.platform}
                    onSelectPlatform={(platform) =>
                      setGameQuery({ ...gameQuery, platform })
                    }
                  />
                </Col>
                <Col>
                  <SortSelector
                    sortOrder={gameQuery.sortOrder}
                    onSelectSortOrder={(sortOrder) =>
                      setGameQuery({ ...gameQuery, sortOrder })
                    }
                  />
                </Col>
              </Row>
              <GameGrid gameQuery={gameQuery} />
            </Col>
          </Row>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
