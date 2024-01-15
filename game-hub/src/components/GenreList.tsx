import { Image, List, Row, Spin, Typography } from "antd";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const { Text } = Typography;

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spin />;
  return (
    <List
      dataSource={data}
      renderItem={(genre) => (
        <List.Item
          key={genre.id}
          
        >
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              height={32}
              width={32}
              style={{ marginRight: '8px', marginBottom: '0px' }} 
            />
            <Typography.Title level={5} style={{ margin: 0 }}>
              {genre.name}
            </Typography.Title>
          </Row>
        </List.Item>
      )}
    ></List>
  );
};

export default GenreList;
