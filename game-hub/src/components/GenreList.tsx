import { List, Typography } from "antd";
import useGenres from "../hooks/useGenres"

const { Text } = Typography;

const GenreList = () => {
    const {genres} = useGenres();
  return (
    <List
    dataSource={genres}
    renderItem={(genre) => (
      <List.Item>
        <Text key={genre.id}>{genre.name}</Text>
      </List.Item>
    )}
  ></List>
  )
}

export default GenreList