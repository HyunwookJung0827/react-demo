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
  key: string,
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
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    { name: "Relevance", key: '' },
    { name: "Date added", key: '-added' },
    { name: "Name", key: 'name' },
    { name: "Release date", key: '-released' },
    { name: "Popularity", key: '-metacritic' },
    { name: "Average rating", key: '-rating' },
  ];

  const sortOrderItems: MenuItem[] = sortOrders.map((item) =>
    getItem(item.name, item.key)
  );
const currentSortOrder = sortOrders.find(order=> order.key === sortOrder);
  return (
    <Dropdown
      menu={{
        items: sortOrderItems,
        selectable: true,
        onClick: (e) => {
            const id = e.key;
            const sortOrder = sortOrders.find(
              (order) => order.key.toString() === id
            );
            sortOrder && onSelectSortOrder(sortOrder.key);
          }
      }}
      trigger={["click"]}
      overlayStyle={{ width: 200 }}
    >
      <Button>
        <Space>
          Order by: {currentSortOrder?.name || 'Relevance'}
          <DownOutlined />
        </Space>
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
