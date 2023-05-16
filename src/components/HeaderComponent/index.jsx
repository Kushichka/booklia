import { useDispatch, useSelector } from "react-redux";
import { Input, Typography, Button, Space, Layout } from "antd"

import { changeResultError, changeInputValue, changeSearchResults } from '../../redux/slices/homePageSlice';
import { Link } from "react-router-dom";

const { Text } = Typography;
const { Header } = Layout;
const { Search } = Input;

export const HeaderComponent = () => {
    const dispatch = useDispatch();
    const { isLoading, inputValue } = useSelector(state => state.homePageSlice);

    

    const inputHandler = (value) => {
        if(value.length === 0) {
            return dispatch(changeResultError('Input title name!'));
        }

        if(value !== inputValue) {
            dispatch(changeSearchResults([]));
            dispatch(changeResultError(''));
            dispatch(changeInputValue(value));
        }
    }

    return (
        <Header>
            <Link to={'/'}>
                <Text style={{ marginRight: '10px' }}>Booklia</Text>
            </Link>
            <Search
                placeholder="Harry Potter"
                onSearch={inputHandler}
                allowClear
                loading={isLoading}
                style={{ marginRight: '10px' }}
            />
            <Space>
                <Button type="primary">Login</Button>
                <Button>SignUp</Button>
                {/* <Button shape="circle" size='large' icon={<UserOutlined />} /> */}
            </Space>
        </Header>
    )
}
