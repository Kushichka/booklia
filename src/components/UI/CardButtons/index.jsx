import { useSelector } from 'react-redux';
import { BookOutlined, ReadOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip, message } from 'antd';

import { selectUserData } from '../../../redux/selectors/userSelector';

const buttonStyle = { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '18px'
 };

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
        <Flex gap={10} justify='center'>
            <Tooltip title='Add to library'>
                <Button 
                    icon={<BookOutlined style={buttonStyle} />}
                    onClick={onAddToLibrary}
                />
            </Tooltip>

            <Tooltip title='Want to read'>
                <Button 
                    icon={<ReadOutlined style={buttonStyle} />} 
                    onClick={onWantToRead}
                />
            </Tooltip>
        </Flex>
    );
};