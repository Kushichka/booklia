import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Pagination, Row } from "antd"

import { BookListSkeleton } from "../../BookList/BookListSkeleton";
import { BookList } from '../../BookList';
import { Sort } from '../../UI/Sort';
import { useGetBooksQuery } from "../../../API/api";
import { selectSort } from "../../../redux/selectors/searchSelector";
import { setCurrentPage } from "../../../redux/slices/searchSlice";

export const SearchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('title');

    // const currentPage = useSelector(selectCurrentPage);
    const sortBy = useSelector(selectSort);

    const { data, isFetching } = useGetBooksQuery([searchValue, sortBy]);

    const paginationHandler = (pageValue) => {
        // const sortBy = sortValue(sort);
        // const page = pageValue;

        // dispatch(setCurrentPage(page));
    }

    if (isFetching) {
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

                <BookList data={data?.items} />

                <Pagination
                    current={1} // for test
                    // current={currentPage}
                    onChange={paginationHandler}
                    // total={data?.numFound || 1}
                    total={23} // for test
                    showSizeChanger={false}
                    style={{ textAlign: 'center' }}
                />
            </Col>
        </Row>
    );
}
