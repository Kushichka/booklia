import { Button, Card, Flex, Form, Input, theme } from 'antd';

import { SignInWithGoogleButton } from '../UI/SignInWithGoogleButton';

const {useToken} = theme;

const cardStyle = {
    boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)'
};

export const SignInForm = () => {
    const {token} = useToken();
    
    const headerStyle = {
        backgroundColor: token.colorPrimary,
        color: '#fff',
        textAlign: 'center',
        fontSize: '20px'
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Flex justify='center' align='center'>
            <Card title='Login' headStyle={headerStyle} style={cardStyle}>
                <Form
                    name="loginForm"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600
                    }}
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16
                        }}
                    >
                        <Flex gap={10} justify='center'>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                            <SignInWithGoogleButton />
                        </Flex>
                    </Form.Item>
                </Form>
            </Card>
        </Flex>
    )
}
