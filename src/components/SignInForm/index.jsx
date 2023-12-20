import { Button, Form, Input, Space } from 'antd';

import { SignInWithGoogleButton } from '../SignInWithGoogleButton';

export const SignInForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name='signUp'
            // labelCol={{ span: 4 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                labelCol={5}
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
                labelCol={5}
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
                    span: 16,
                }}
                style={{ marginBottom: '0', textAlign: 'center' }}
            >
                <Space
                    align='center'
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>

                    <SignInWithGoogleButton />
                </Space>
            </Form.Item>

        </Form>
    )
}
