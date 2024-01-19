import { Card } from "antd";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return <Card style={{ marginBottom: "16px" }}>{children}</Card>;
};

export default GameCardContainer;
