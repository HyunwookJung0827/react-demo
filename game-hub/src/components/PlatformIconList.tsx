import { Platform } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      {" "}
      {platforms.map((platform) => (
        <PlatformIcon key={platform.id} platform={platform.slug} color="grey"/>
      ))}
    </div>
  );
};

export default PlatformIconList;
