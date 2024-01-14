import React from 'react';
import { List, Typography } from 'antd';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const { Text } = Typography;

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
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
