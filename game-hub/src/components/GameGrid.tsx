import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { List, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <List
        dataSource={games}
        renderItem={(item) => <List.Item key={item.id}>{item.name}</List.Item>}
      ></List>
    </>
  );
};

export default GameGrid;
