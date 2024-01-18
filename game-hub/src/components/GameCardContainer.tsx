import { Card } from "antd";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  isDarkMode: boolean;
}
const GameCardContainer = ({ children, isDarkMode }: Props) => {
  return (
    <Card
      style={{ marginBottom: "16px", background: isDarkMode ? "#333" : "#fff" }}
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
