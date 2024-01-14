import { Card, Image, Tag, Typography } from "antd";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}
const { Title, Paragraph, Text, Link } = Typography;

const GameCard = ({ game }: Props) => {
  return (
    <Card style={{ marginBottom: "16px" }}>
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
    </Card>
  );
};

export default GameCard;
