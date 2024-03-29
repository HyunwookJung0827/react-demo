import React from "react";
import {
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const platformItems: MenuItem[] = data.map((platform) =>
    getItem(platform.name, platform.id)
  );

  return (
    <Dropdown
      menu={{
        items: platformItems,
        selectable: true,
        onClick: (e) => {
          const id = e.key;
          const platform = data.find(
            (platform) => platform.id.toString() === id
          );
          platform && onSelectPlatform(platform);
        },
      }}
      trigger={["click"]}
      overlayStyle={{ width: 200 }}
    ><Button><Space>
    {selectedPlatform?.name || "Platforms"}
    <DownOutlined /></Space>
  </Button>
      {/* <div style={{ width: 200 }}>{selectedPlatform?.name || "Platforms"}</div> */}
      {/* <Menu
      onClick={(e) =>{
        const id = e.key;
        const platform = data.find(platform=> platform.id.toString() === id);
        platform && onSelectPlatform(platform);
        }}
      style={{ width: 200 }}
      mode="inline"
      items={items}
      defaultOpenKeys={[]}
      defaultSelectedKeys={[]}
    /> */}
    </Dropdown>
  );
};

export default PlatformSelector;
