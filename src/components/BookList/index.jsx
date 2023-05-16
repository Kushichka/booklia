import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from 'antd';

import { Sort } from "../Sort";
import { BookItem } from "../BookItem";
import { changeCurrentPage, changeSearchResults } from '../../redux/slices/homePageSlice';

import style from './BookList.module.scss';

export const BookList = () => {

    const [content, setContent] = useState([]);
    const { searchResults, resultError, currentPage } = useSelector(state => state.homePageSlice);
    const dispatch = useDispatch();

    const getData = async () => {
        const res = await searchResults.docs?.map((item, i) => <BookItem key={i} id={item.key} {...item} />);
        setContent(res);
    };

    useEffect(() => {
        getData();
    }, [searchResults]);

    const paginationHandler = (page) => {
        dispatch(changeSearchResults([]));
        dispatch(changeCurrentPage(page));
    }

    return (
        <div className={style.book_list_wrapper}>
            {!resultError && (
                <Sort />
            )}

            <div className={style.book_list}>
                {!resultError ? content : (
                    <div className={style.book_list_error}>
                        <h1>{resultError}</h1>
                    </div>
                )}
            </div>

            {!resultError && (
                <Pagination
                    current={currentPage}
                    onChange={paginationHandler}
                    total={searchResults.numFound}
                    showSizeChanger={false}
                />
            )}

        </div>
    );
};