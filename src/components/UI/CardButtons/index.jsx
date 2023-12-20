import { useSelector } from 'react-redux';
import { BookOutlined, ReadOutlined } from '@ant-design/icons';
import { Button, Row, Space, Tooltip, message } from 'antd';

import { selectUserData } from '../../../redux/selectors/userSelector';

export const CardButtons = () => {
    const userData = useSelector(selectUserData)

    const onAddToLibrary = () => {
        if(!userData?.uid) {
            message.info('You need to login');
        }
    }

    const onWantToRead = () => {
        if(!userData?.uid) {
            message.info('You need to login');
        }
    }

    return (
        <Row justify='center'>
            <Space>
                <Tooltip title='Add to library'>
                    <Button 
                        type="default" 
                        icon={<BookOutlined style={{ fontSize: '18px' }} />}
                        onClick={onAddToLibrary}
                    />
                </Tooltip>

                <Tooltip title='Want to read'>
                    <Button 
                        type="default" 
                        icon={<ReadOutlined style={{ fontSize: '18px' }} />} 
                        onClick={onWantToRead}
                    />
                </Tooltip>
            </Space>
        </Row>
    );
};