import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Flex } from "antd"

import { BookListSkeleton } from "../../BookList/BookListSkeleton";
import { BookList } from '../../BookList';
import { Sort } from '../../UI/Sort';
import { useGetBooksQuery } from "../../../API/api";
import { selectCurrentPage, selectSort } from "../../../redux/selectors/searchSelector";
import { setCurrentPage } from "../../../redux/slices/searchSlice";

export const SearchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get('title');
    const encodedSearchValue = encodeURIComponent(searchValue);

    const sortBy = useSelector(selectSort);
    const encodedSortBy = encodeURIComponent(sortBy);

    const currentPage = useSelector(selectCurrentPage);
    const nextPageIndex = currentPage * 10 - 10;


    const { data, isFetching } = useGetBooksQuery([encodedSearchValue, encodedSortBy, nextPageIndex]);

    const paginationHandler = (pageValue) =>
        dispatch(setCurrentPage(pageValue));

    if (isFetching) {
        return (
            <Flex justify='center'>
                <BookListSkeleton />
            </Flex>
        )
    }

    return (
        <Flex 
            vertical
            align="center"
            gap={20}
        >
            <Sort />

            <BookList data={data?.items} />

            <Pagination
                current={currentPage}
                onChange={paginationHandler}
                total={data?.totalItems}
                showSizeChanger={false}
                style={{ textAlign: 'center' }}
            />
        </Flex>
    );
}
