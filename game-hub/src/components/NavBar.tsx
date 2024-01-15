import { Col, Image, Row, Switch } from "antd";
import logo from "../assets/Logo/logo.webp";
interface Props {
  onClick: void;
}
const NavBar = ({ onClick }: Props) => {
  return (
    <Row align="middle" gutter={8} style={{ paddingLeft: '10px' }}>
      <Col className="gutter-row">
        <Image src={logo} alt="Logo" width={60} />
      </Col>
      <Col className="gutter-row" push={20}>
        <Switch className="bg-green-300" onChange={onClick} /> Dark Mode
      </Col>
    </Row>
  );
};

export default NavBar;
