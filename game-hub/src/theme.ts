import { ConfigProvider, theme, ThemeConfig } from "antd";

const { defaultAlgorithm, darkAlgorithm } = theme;
const [isDarkMode, setIsDarkMode] = useState(false);
const config: ThemeConfig = {
    initialColorMode: 'dark',
    darkmode: true
}

export default theme;