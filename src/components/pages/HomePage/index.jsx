import { Flex, Typography } from 'antd';

import { Suggestions } from '../../Suggestions';

const {Title} = Typography;

export const HomePage = () => {
    return (
        <Flex
            vertical
            justify='center'
            align='center'
            gap={20}
            flex={2}
        >
            <Title level={4}>
                Recommendations in this month
            </Title>

            <Suggestions />
        </Flex>
    )
}
