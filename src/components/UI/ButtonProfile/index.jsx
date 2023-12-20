import { memo } from "react";
import { Image } from "antd"

import style from './ButtonProfile.module.scss';

export const ButtonProfile = memo(({ photoURL, dropDownMenuHandler }) => {
    return (
        <button className={style.buttonProfile}>
            <Image
                onClick={dropDownMenuHandler}
                src={photoURL}
                preview={false}
                width={40}
                style={{ borderRadius: '50%' }}
            />
        </button>
    )
});
