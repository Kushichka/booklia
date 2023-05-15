import { Image, Skeleton } from 'antd';

import style from './BookImg.module.scss';

const imgSize = {
    m: { height: 200, width: 125 },
    l: { height: 395, width: 248 }
}

const baseURL = `https://covers.openlibrary.org/b/id`

export const BookImg = ({ cover, size }) => {

    const imgSrc = size === 'm' ? 
        `${baseURL}/${cover}-M.jpg` : 
        `${baseURL}/${cover}-L.jpg`;

    return (
        <div className={style.card_img}>
            {!cover ? (
                <div className={style.img_empty}>
                    <Skeleton.Image />
                </div>
            ) 
            : 
            (
                <Image
                    height={size === 'm' ? imgSize.m.height : imgSize.l.height}
                    width={size === 'm' ? imgSize.m.width : imgSize.l.width}
                    src={imgSrc}
                    preview={true}
                />
            )}
        </div>
    );
};