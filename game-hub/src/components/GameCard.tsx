
import { Card, Image, Typography } from 'antd'
import { Game } from '../hooks/useGames'
interface Props {
    game: Game
}
const { Title, Paragraph, Text, Link } = Typography;

const GameCard = ({game}: Props) => {
  return (
    <Card>
        <Image src={game.background_image} />
        <Title level={3}>{game.name}</Title>
    </Card>
  )
}

export default GameCard