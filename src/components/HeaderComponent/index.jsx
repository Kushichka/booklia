import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input, Typography, Button, Space } from "antd";

import { changeInputValue, changeCurrentPage, changeSort, getAllBooks } from '../../redux/slices/searchSlice';
import { selectInputValue, selectIsLoading } from "../../redux/selectors/searchSelector";

import style from './HeaderComponent.module.scss';

const { Text } = Typography;
const { Search } = Input;

export const HeaderComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector(selectIsLoading);
    const inputValue = useSelector(selectInputValue);

    const logoStyles = {
        fontSize: '30px',
        color: '#fff',
        cursor: 'pointer'
    }

    const getBooks = (title, sortBy='', page=1) => {
        navigate(`search?title=${encodeURIComponent(title)}`);
        
        dispatch(getAllBooks({title, sortBy, page}));
    };

    const searchHandler = (value) => {
        if(value.length !== 0) {
            // dispatch(changeInputValue(value));
            dispatch(changeCurrentPage(1));
            dispatch(changeSort(''));

            getBooks(value);
        }
    }

    const onChangeHandler = (e) => {
        dispatch(changeInputValue(e.target.value));
    }

    const logoHandler = () => {
        navigate('/', {replace: true});
        dispatch(changeInputValue(''));
    }

    return (
        <div className={style.header_wrapper}>

            <Text style={logoStyles} onClick={logoHandler}>Booklia</Text>

            <Search
                placeholder="Harry Potter"
                onSearch={searchHandler}
                onChange={onChangeHandler}
                allowClear
                loading={isLoading}
                style={{maxWidth: '300px'}}
                value={inputValue}
            />

            <Space size='middle'>
                <Button type="primary">Login</Button>
                <Button>SignUp</Button>
                {/* <Button shape="circle" size='large' icon={<UserOutlined />} /> */}
            </Space>
        </div>
    )
}
