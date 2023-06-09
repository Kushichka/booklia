import { useMemo } from "react";
import { useSelector } from "react-redux";

import { BookItem } from "../BookItem";
import { selectSearchResults } from "../../redux/selectors/searchSelector";

import style from './BookList.module.scss';

export const BookList = () => {

    const searchResults = useSelector(selectSearchResults);
    
     const content = useMemo(() => {
         return searchResults.docs?.map(item => <BookItem key={item.key} id={item.key} {...item} />);
     }, [searchResults]);

    return (
        <div className={style.book_list_wrapper}>
            {content}
        </div>
    );
};