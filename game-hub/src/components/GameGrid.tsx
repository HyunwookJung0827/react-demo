import { List, Typography } from "antd";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
const { Title, Paragraph, Text, Link } = Typography;
const colCounts: Record<PropertyKey, number> = {};
[1, 2, 3, 5].forEach((value, i) => {
    colCounts[i] = value;
  });
const GameGrid = () => {
    const {games, error} = useGames();
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <List grid={{gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3}}
        dataSource={games}
        renderItem={(game) => <GameCard key={game.id} game={game}></GameCard>}
      ></List>
    </>
  );
};

export default GameGrid;
