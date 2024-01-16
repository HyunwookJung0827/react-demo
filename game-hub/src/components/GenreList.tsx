import { Button, Image, List, Row, Spin, Typography } from "antd";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const { Text } = Typography;

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spin />;
  return (
    <List
      dataSource={data}
      renderItem={(genre) => (
        <List.Item key={genre.id}>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              height={32}
              width={32}
              style={{
                marginRight: "8px",
                marginBottom: "0px",
                borderRadius: "20%",
              }}
            />
            <Button
              type="link"
              onClick={() => onSelectGenre(genre)}
              danger={true}
            >
              <Typography.Title
                level={5}
                style={{
                  margin: 0,
                  fontWeight:
                    genre.id === selectedGenre?.id ? "bold" : "normal",
                }}
              >
                {genre.name}
              </Typography.Title>
            </Button>
          </Row>
        </List.Item>
      )}
    ></List>
  );
};

export default GenreList;
