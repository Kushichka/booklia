import { Image, Skeleton } from 'antd';

import style from './BookImg.module.scss';

export const BookImg = ({ cover_i }) => {

    return (
        <div className={style.card_img}>
            {!cover_i ? (
                <div className={style.img_empty}>
                    <Skeleton.Image />
                </div>
            ) 
            : 
            (
                <Image
                    height={200}
                    width={125}
                    src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
                    preview={{
                        src: `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`,
                    }}
                />
            )}
        </div>
    );
};