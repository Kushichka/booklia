import { Input, Typography, Button, Space, Layout } from "antd"

const { Text } = Typography;
const { Header } = Layout;
const { Search } = Input;

export const HeaderComponent = ({onSearch, isLoading}) => {

    return (
        <Header>
            <Text style={{marginRight: '10px'}}>Booklia</Text>
            <Search
                placeholder="Harry Potter"
                onSearch={onSearch}
                allowClear
                loading={isLoading ? true : false}
                style={{marginRight: '10px'}}
            />
            <Space>
                <Button type="primary">Login</Button>
                <Button>SignUp</Button>
                {/* <Button shape="circle" size='large' icon={<UserOutlined />} /> */}
            </Space>
        </Header>
    )
}