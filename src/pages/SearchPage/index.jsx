import { useDispatch, useSelector } from "react-redux";
import { Col, Pagination, Row } from "antd"

import { BookListSkeleton } from "../../components/BookList/BookListSkeleton";
import { BookList } from '../../components/BookList';
import { changeCurrentPage, getAllBooks } from '../../redux/slices/searchSlice';
import { Sort } from '../../components/Sort';
import { sortValue } from "../../utils/bookInfo";

export const SearchPage = () => {
    const dispatch = useDispatch();

    const { isLoading, currentPage, searchResults, inputValue, sort } = useSelector(state => state.searchSlice);

    const paginationHandler = (pageValue) => {
        const title = inputValue;
        const sortBy = sortValue(sort);
        const page = pageValue;

        dispatch(changeCurrentPage(page));
        localStorage.setItem('page', page);

        dispatch(getAllBooks({title, sortBy, page}));
    }

    if (isLoading) {
        return (
            <Row justify='center'>
                <BookListSkeleton />
            </Row>
        )
    }

    return (
        <Row justify='center'>
            <Col>
                <Sort />
                <BookList />
                <Pagination
                    current={currentPage}
                    onChange={paginationHandler}
                    total={searchResults.numFound}
                    showSizeChanger={false}
                    style={{textAlign: 'center' }}
                />

            </Col>
        </Row>
    );
}
