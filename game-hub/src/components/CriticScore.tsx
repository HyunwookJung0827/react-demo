import { Tag } from "antd";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "gold" : "";
  return <Tag color={color}>{score}</Tag>;
};

export default CriticScore;
