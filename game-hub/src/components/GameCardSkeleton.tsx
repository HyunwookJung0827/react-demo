import { Skeleton } from "antd";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => (
  <GameCardContainer>
    {" "}
    <Skeleton.Image active />
    <Skeleton active />
  </GameCardContainer>
);

export default GameCardSkeleton;
