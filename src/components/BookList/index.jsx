import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { BookItem } from "../BookItem";

import style from './BookList.module.scss';

export const BookList = () => {

    const [content, setContent] = useState([]);
    const { searchResults } = useSelector(state => state.searchSlice);

    const getData = useCallback(async () => {
        const res = await searchResults.docs?.map(item => <BookItem key={item.key} id={item.key} {...item} />);

        setContent(res);
    }, [searchResults]);

    useEffect(() => {
        getData();
    }, [searchResults]);

    return (
        <div className={style.book_list_wrapper}>
            {content}
        </div>
    );
};