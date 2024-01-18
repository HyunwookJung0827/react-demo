import { Col, Image, Row, Space, Switch, Typography } from "antd";
import logo from "../assets/Logo/logo.webp";
import { SwitchChangeEventHandler } from "antd/es/switch";
import SearchInput from "./SearchInput";
const { Text } = Typography;
interface Props {
  onClick: SwitchChangeEventHandler;
  onSearch: (searchText: string) => void;
  isDarkMode: boolean;
}
const NavBar = ({ onClick, onSearch, isDarkMode }: Props) => {
  return (
    <Row align="middle" gutter={8} style={{ paddingLeft: "10px", background: isDarkMode ? '#333' : '#fff'  }}>
      <Col flex="auto">
        {/* This Col will take the remaining space */}
        <Row gutter={8} align="middle">
          <Col span={2}>
            {/* Left content */}
            <Image src={logo} alt="Logo" width={60} />
          </Col>
          <Col flex="auto">
            {/* Middle content */}
            <SearchInput onSearch={onSearch}/>
          </Col>
          <Col span={2}>
            {/* Right content */}
            <Space>
              <Switch className="bg-green-300" onChange={onClick} />
              <Text ellipsis> Dark Mode</Text>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default NavBar;
