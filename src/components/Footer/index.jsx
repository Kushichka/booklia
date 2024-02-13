import { Flex, Typography } from "antd";

const footerStyle = {
    backgroundColor: 'rgb(3, 8, 82)',
    padding: '20px'
};

export const Footer = () => {
    return (
        <Flex
            vertical
            align="center"
            justify="center"
            style={footerStyle}
        >
            <Typography.Text style={{ color: '#fff' }}>
                Copyright © 2024 Booklia. All Rights Reserved.
            </Typography.Text>
        </Flex>
    )
};
