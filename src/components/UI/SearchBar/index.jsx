import { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/slices/searchSlice";

const { Search } = Input;

export const SearchBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    const searchHandler = () => {
        if (searchValue) {
            dispatch(setSort(''));
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
