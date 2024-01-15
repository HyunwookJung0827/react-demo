import { List, Typography } from "antd";
import useGenres from "../hooks/useGenres"

const { Text } = Typography;

const GenreList = () => {
    const {data} = useGenres();
  return (
    <List
    dataSource={data}
    renderItem={(genre) => (
      <List.Item>
        <Text key={genre.id}>{genre.name}</Text>
      </List.Item>
    )}
  ></List>
  )
}

export default GenreList