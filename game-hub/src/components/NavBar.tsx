import { Image, Row } from "antd";
import logo from "../assets/Logo/logo.webp";

const NavBar = () => {
  return (
    <Row align="middle">
      <Image src={logo} alt="Logo" width={60} />
      NavBar
    </Row>
  );
};

export default NavBar;
