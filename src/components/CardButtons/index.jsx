import { BookOutlined, ReadOutlined } from '@ant-design/icons';
import { Button, Row, Space, Tooltip } from 'antd';

export const CardButtons = () => {

    const clickHandler = () => {
    
    }

    return (
        <Row justify='center'>
            <Space>
                <Tooltip title='Add to library'>
                    <Button 
                        type="default" 
                        icon={<BookOutlined style={{ fontSize: '18px' }} />}
                    />
                </Tooltip>

                <Tooltip title='Want to read'>
                    <Button 
                        type="default" 
                        icon={<ReadOutlined style={{ fontSize: '18px' }} />} 
                    />
                </Tooltip>
            </Space>
        </Row>
    );
};