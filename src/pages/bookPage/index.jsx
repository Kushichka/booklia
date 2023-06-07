import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row } from "antd"

import { BookCard } from "../../components/BookCard";
import { BookCardSkeleton } from "../../components/BookCard/BookCardSkeleton";
import { changeCurrentPage, changeInputValue, changeSort, getAllBooks } from '../../redux/slices/searchSlice';

import style from './bookPage.module.scss';
import { sortValue } from "../../utils/bookInfo";

export const BookPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading } = useSelector(state => state.bookSlice);
    const { searchResults } = useSelector(state => state.searchSlice);

    const goBack = async () => {
        if(searchResults.length === 0) {
            const title = localStorage.getItem('inputValue');
            const sortBy = sortValue(localStorage.getItem('sort'));
            const page = localStorage.getItem('page');
            
            dispatch(changeInputValue(title));
            dispatch(changeSort(sortBy));
            dispatch(changeCurrentPage(page));

            dispatch(getAllBooks({title, sortBy, page}));

            navigate(`/search?title=${encodeURIComponent(title)}`);
        } else {
            navigate(-1);
        }
    }

    if(isLoading) {
        return (
            <Row justify='center'>
                <BookCardSkeleton />
            </Row>
        )
    }

    return (
        <>
            <Row justify='center'>
                <div className={style.bookPage_goBack_wrapper}>
                    <p className={style.bookPage_goBack} onClick={goBack}>Go back</p>
                </div>
            </Row>
            <Row justify='center'>
                <BookCard />
            </Row>

        </>
    )
}