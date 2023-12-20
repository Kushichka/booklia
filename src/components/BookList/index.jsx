import { v4 } from "uuid";

import { BookItem } from "../BookItem";

import style from './BookList.module.scss';

export const BookList = ({ data }) => {
    const items = data?.map(item => (
        <BookItem 
            key={item.id + v4()} 
            data={item}
        />
    ));

    return (
        <div className={style.book_list_wrapper}>
            {items}
        </div>
    );
}