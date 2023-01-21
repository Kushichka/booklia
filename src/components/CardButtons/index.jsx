import { PlusCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import style from './CardButtons.module.scss';

export const CardButtons = () => {

    return (
        <div className={style.card_btns}>
            <Button type="primary" icon={<PlusCircleOutlined style={{ fontSize: '18px' }} />}>
                Add to Library
            </Button>
            
            <Button type="primary" danger icon={<EyeOutlined style={{ fontSize: '18px' }} />}>
                Want to Read
            </Button>
        </div>
    );
};