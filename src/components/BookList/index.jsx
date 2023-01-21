import { useEffect, useState } from "react";
import { Pagination } from 'antd';

import { BookItem } from "../BookItem";

import style from './BookList.module.scss';

export const BookList = ({ searchResults, resultError }) => {

    const [content, setContent] = useState([]);

    const getData = () => {
        setContent(searchResults.map((item, i) => (
            <BookItem key={i} {...item} />
        )));
    }

    useEffect(() => {
        getData();
        console.log(searchResults);
    }, [searchResults]);

    const paginationHandler = (page, pageSize) => {
        console.log('page', page);
        console.log('pageSize', pageSize);
    }

    return (
        <div className={style.book_list_wrapper}>
            <div className={style.book_list}>
                {content.length > 0 ? content : (
                    <div className={style.book_list_error}>
                        <h1>{resultError}</h1>
                    </div>)}
            </div>
            {content.length > 0 && (
                <Pagination
                    onChange={paginationHandler}
                    defaultCurrent={1}
                    total={content.length}
                    showSizeChanger={false}
                />
            )}
        </div>
    );
};