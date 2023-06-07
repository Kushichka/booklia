import { Card } from 'antd';

import style from './BookListSkeleton.module.scss';

export const BookListSkeleton = () => {
    return (    
        <div className={style.bookListSkeleton_wrapper}>
            {new Array(10).fill('').map((_, i) => (
                <Card key={i} style={{ width: 500 }} loading />  
            ))}           
        </div>
    )
}