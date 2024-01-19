import { Card, List, Skeleton, Typography } from "antd";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

const { Text } = Typography;
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <>
      {isLoading && (
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
          dataSource={skeletons}
          renderItem={(skeleton) => (
            <List.Item>
              <GameCardSkeleton key={skeleton} />
            </List.Item>
          )}
        ></List>
      )}
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        dataSource={data}
        renderItem={(game) => (
          <List.Item>
            <GameCard key={game.id} game={game} />
          </List.Item>
        )}
      ></List>
    </>
  );
};

export default GameGrid;
