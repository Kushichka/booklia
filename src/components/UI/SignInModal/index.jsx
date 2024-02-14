import { Modal, Form, Input, Flex, Button, Typography, Divider, theme, Space } from "antd";

import { SignInWithGoogleButton } from "../SignInWithGoogleButton";

const {useToken} = theme;

export const SignInModal = ({isOpenLogin, hide, openRegister}) => {
    const {token} = useToken();

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const modalTitle = (
        <Typography.Title 
            level={3} 
            style={{textAlign: 'center', color: token.colorPrimary}}
        >
            Welcome Back
        </Typography.Title>
    );

    return (
        <Modal
            title={modalTitle}
            open={isOpenLogin}
            onCancel={hide}
            centered
            footer={null}
            destroyOnClose={true}
        >
            <Form
                name="loginForm"
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
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
                            message: 'Please input your username!'
                        }
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
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{marginBottom: 0}}
                    wrapperCol={{
                        offset: 4,
                        span: 16
                    }}
                >
                    <Flex vertical align="center">
                        <Space>
                            <Button type="primary" htmlType="submit" style={{fontWeight: 600}}>
                                Sign In
                            </Button>
                            <Button onClick={openRegister}>
                                Sign Up
                            </Button>
                        </Space>

                        <Divider plain>OR</Divider>
                    </Flex>
                </Form.Item>
            </Form>
            
            <Flex justify="center">
                <SignInWithGoogleButton />
            </Flex>
        </Modal>
    )
}
