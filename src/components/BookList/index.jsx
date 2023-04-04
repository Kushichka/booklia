import { useEffect, useState } from "react";
import { Pagination } from 'antd';

import { Sort } from "../Sort";
import { BookItem } from "../BookItem";

import style from './BookList.module.scss';
import { useCallback } from "react";

export const BookList = ({ searchResults, resultError, changeSort, sort }) => {

    const [actualPage, setActualPage] = useState(1);
    const [content, setContent] = useState([]);

    const getData = useCallback((from, to) => {
        return (
            searchResults.slice(from, to).map((item, i) => (
                
                <BookItem key={i} {...item} />
            ))
        );
    }, [searchResults]);

    useEffect(() => {
        const parseFrom = actualPage === 1 ? 0 : (actualPage * 10) - 10;
        const parseTo = actualPage === 1 ? 10 : actualPage * 10;

        setContent(getData(parseFrom, parseTo));
    }, [actualPage]);

    useEffect(() => {
        setContent(getData(0, 10)); 
    }, [getData]);

    const paginationHandler = (page) => {
        setActualPage(page);
    }

    return (
        <div className={style.book_list_wrapper}>

            {content.length > 0 && (
                <Sort changeSort={changeSort} sort={sort} />
            )}

            <div className={style.book_list}>
                {content.length > 0 ? content : (
                    <div className={style.book_list_error}>
                        <h1>{resultError}</h1>
                    </div>)}
            </div>
            {content.length > 0 && (
                <Pagination
                    onChange={paginationHandler}
                    total={searchResults.length}
                    showSizeChanger={false}
                />
            )}
        </div>
    );
};