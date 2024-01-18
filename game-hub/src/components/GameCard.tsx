import { Image, Typography } from "antd";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
interface Props {
  game: Game;
  isDarkMode: boolean;
}
const { Title } = Typography;

const GameCard = ({ game, isDarkMode }: Props) => {
  return (
    <GameCardContainer isDarkMode={isDarkMode}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Title level={3}>{game.name}</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </div>
    </GameCardContainer>
  );
};

export default GameCard;
