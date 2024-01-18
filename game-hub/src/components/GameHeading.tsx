import { Typography } from "antd"
import { GameQuery } from "../App";

const {Title} = Typography;
interface Props {
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}: Props) => {
    // Platform Genre Games i.e. "Xbox Action Games"
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Title>{heading}</Title>
  )
}

export default GameHeading