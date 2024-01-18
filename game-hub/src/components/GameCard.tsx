import { Image, Typography } from "antd";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
interface Props {
  game: Game;
  isDarkMode: boolean;
}
const { Title } = Typography;

const GameCard = ({ game, isDarkMode }: Props) => {
  return (
    <GameCardContainer isDarkMode={isDarkMode}>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3
        }}
      >
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
      </div>
      <Title level={3}>{game.name}</Title><Emoji rating={game.rating_top}/>
    </GameCardContainer>
  );
};

export default GameCard;
