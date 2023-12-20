import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Pagination, Row } from "antd"

import { BookListSkeleton } from "../../BookList/BookListSkeleton";
import { BookList } from '../../BookList';
import { Sort } from '../../UI/Sort';
// import { sortValue } from "../../../utils/bookInfo";
// import { selectCurrentPage, selectSort } from "../../../redux/selectors/searchSelector";
import { useGetBooksQuery } from "../../../API/api";
// import { setCurrentPage, setInputValue } from "../../../redux/slices/searchSlice";

export const SearchPage = () => {    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('title');

    // const currentPage = useSelector(selectCurrentPage);
    // const sort = useSelector(selectSort);

    const {data, isLoading} = useGetBooksQuery(searchValue);

    const paginationHandler = (pageValue) => { 
        // const sortBy = sortValue(sort);
        // const page = pageValue;

        // dispatch(setCurrentPage(page));
    }

    // useEffect(() => {
    //     if(searchValue.length === 0) navigate('/');

    //     // if(searchValue.length !== 0) dispatch(setInputValue(searchValue));

    // }, [searchValue]);

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

                <BookList data={data?.items} />
                
                <Pagination
                    current={1} // for test
                    // current={currentPage}
                    onChange={paginationHandler}
                    // total={data?.numFound || 1}
                    total={23} // for test
                    showSizeChanger={false}
                    style={{textAlign: 'center' }}
                />
            </Col>
        </Row>
    );
}
