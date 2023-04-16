import { useDispatch, useSelector } from "react-redux";
import { Input, Typography, Button, Space, Layout } from "antd"

import { changeResultError,changeInputValue } from '../../redux/slices/bookSlice';

const { Text } = Typography;
const { Header } = Layout;
const { Search } = Input;

export const HeaderComponent = () => {

    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.bookSlice);

    

    const inputHandler = (value) => {
        if(value.length === 0) {
            return dispatch(changeResultError('Input title name!'));
        }

        dispatch(changeResultError(''));
        dispatch(changeInputValue(value));
    }

    return (
        <Header>
            <Text style={{ marginRight: '10px' }}>Booklia</Text>
            <Search
                placeholder="Harry Potter"
                onSearch={inputHandler}
                allowClear
                loading={isLoading ? true : false}
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
