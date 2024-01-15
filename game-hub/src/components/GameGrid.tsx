import { Card, List, Skeleton, Typography } from 'antd';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const { Text } = Typography;

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        dataSource={skeletons}
        renderItem={(skeleton) => (
          
          <List.Item>
            <GameCardSkeleton key={skeleton} />
          </List.Item>
        )}
      ></List>}
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
        dataSource={games}
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
