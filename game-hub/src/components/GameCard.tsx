
import { Card, Image, Typography } from 'antd'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList';
interface Props {
    game: Game
}
const { Title, Paragraph, Text, Link } = Typography;

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src={game.background_image} />
        <Title level={3}>{game.name}</Title>
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
    </Card>
  )
}

export default GameCard