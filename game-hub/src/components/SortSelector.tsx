import React from "react";
import {
  AppstoreOutlined,
  DownOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Menu, Space } from "antd";
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
const SortSelector = () => {
    const data = [{name: "Relevance", id: 0}, 
    {name: "Date added", id: 1}, 
    {name: "Name", id: 2}, 
    {name: "Release date", id: 3}, 
    {name: "Popularity", id: 4}, 
    {name: "Average rating", id: 5}]

  const platformItems: MenuItem[] = data.map((item) =>
    getItem(item.name, item.id)
  );

  const items: MenuProps["items"] = [
    getItem(
      "Platforms",
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
        selectable: true,
        onClick: (e) => {
          console.log(e);
        },
      }}
      trigger={["click"]}
      overlayStyle={{ width: 200 }}
    ><Button><Space>
        Order by: Relevance
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

export default SortSelector;
