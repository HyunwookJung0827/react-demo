import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import React from "react";
interface PlatformIconProps {
    platform: string;
    color?: string;
  }
const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "pc":
      return <FaWindows />;
    case "playstation":
      return <FaPlaystation />;
    case "xbox":
      return <FaXbox />;
    case "nintendo":
      return <SiNintendo />;
    case "mac":
      return <FaApple />;
    case "linux":
      return <FaLinux />;
    case "ios":
      return <MdPhoneIphone />;
    case "web":
      return <BsGlobe />;
    case "android":
      return <FaAndroid />;
    default:
      return null; // You can return a default icon or null if the platform is not recognized.
  }
};

const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, color }) => {
  const Icon = getPlatformIcon(platform);
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "4px" }}>
      {Icon && React.cloneElement(Icon, { color: color || 'black' })}
    </div>
  );
};

export default PlatformIcon;
