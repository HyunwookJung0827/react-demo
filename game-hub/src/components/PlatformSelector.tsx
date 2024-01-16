import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import usePlatforms from "../hooks/usePlatforms";

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

const PlatformSelector: React.FC = () => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const platformItems: MenuItem[] = data.map((platform) =>
    getItem(platform.name, platform.id)
  );

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const items: MenuProps["items"] = [
    getItem("Platforms", "sub1", <AppstoreOutlined />, platformItems),
  ];

  return (
    <Menu
      onClick={onClick}
      style={{ width: 200 }}
      mode="inline"
      items={items}
      defaultOpenKeys={[]}
      defaultSelectedKeys={[]}
    />
  );
};

export default PlatformSelector;
