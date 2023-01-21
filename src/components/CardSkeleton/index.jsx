import { Card } from 'antd';

import style from '../BookList/BookList.module.scss';

export const CardSkeleton = () => {
    return (
        <div className={style.book_list_wrapper}>
            <div className={style.book_list}>
                <Card style={{ width: 500 }} loading />             
                <Card style={{ width: 500 }} loading />             
                <Card style={{ width: 500 }} loading />             
                <Card style={{ width: 500 }} loading />             
                <Card style={{ width: 500 }} loading />             
                <Card style={{ width: 500 }} loading />             
            </div>
        </div>
    )
}