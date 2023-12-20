import { Image, Skeleton } from 'antd';

import style from './BookImg.module.scss';

export const BookImg = ({ cover }) => {
    return (
        <>
            {!cover ? (
                <div className={style.img_empty}>
                    <Skeleton.Image />
                </div>
            )
            :
            (
                <Image
                    src={cover + '&fife=h300'}
                    preview={{
                        src: `${cover}&fife=h900`
                    }}
                />
            )}
        </>
    );
};