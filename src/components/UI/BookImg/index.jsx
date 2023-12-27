import { Image, Skeleton } from 'antd';

import style from './BookImg.module.scss';

export const BookImg = ({ cover, width }) => {

    if (!cover) {
        return (
            <div className={style.img_empty}>
                <Skeleton.Image />
            </div>
        )
    }

    return (
        <Image
            src={cover + `&fife=w${width}`}
            width={width}
            preview={{
                src: `${cover}&fife=w${width * 3}` // preview is 3 times larger
            }}
            style={{borderRadius: '16px 0 16px 0'}}
        />
    );
};