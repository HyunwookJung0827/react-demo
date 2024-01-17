import { Input, Space } from "antd";

const { Search } = Input;

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {

  return (
    <Space>
      <Search
        placeholder="Search games..."
        allowClear
        onSearch={(value, _e) => {
          _e?.preventDefault();
          if (value) onSearch(value);
        }}
        style={{ width: "100%" }}
      />
    </Space>
  );
};

export default SearchInput;
