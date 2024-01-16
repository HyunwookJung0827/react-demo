import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Menu } from "antd";
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

  const items: MenuProps["items"] = [
    getItem(
      selectedPlatform?.name || "Platforms",
      "sub1",
      <AppstoreOutlined />,
      platformItems
    ),
  ];
  console.log(data);
  return (
    <Dropdown
      menu={{
        items: platformItems,
        onClick: (e) => {
          const id = e.key;
          const platform = data.find(
            (platform) => platform.id.toString() === id
          );
          platform && onSelectPlatform(platform);
          console.log(e);
        },
      }}
      trigger={["click"]}
      overlayStyle={{ width: 100 }}
    >
      <div style={{ width: 200 }}>{selectedPlatform?.name || "Platforms"}</div>
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
