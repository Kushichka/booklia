import { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

export const SearchBar = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const searchHandler = () => {
        if (searchValue) {
            navigate(`search?title=${encodeURIComponent(searchValue)}`);
        }
    }

    const onChangeHandler = (e) => setSearchValue(e.target.value);

    return (
        <Search
            placeholder="Harry Potter"
            onSearch={searchHandler}
            onChange={onChangeHandler}
            style={{ maxWidth: '300px' }}
            value={searchValue}
        />
    )
}
