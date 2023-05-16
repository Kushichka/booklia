import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd"

import { CardSkeleton } from "../../components/CardSkeleton";
import { BookList } from '../../components/BookList';
import { HeaderComponent } from "../../components/HeaderComponent"
import { fetchAllBooks } from '../../API/fetchAllBooks';
import { changeSearchResults, changeIsLoading } from '../../redux/slices/homePageSlice';

import 'antd/dist/reset.css';
import './homePage.css';

const { Content } = Layout;

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, sort, currentPage, inputValue, searchResults } = useSelector(state => state.homePageSlice);

  const getBooks = async () => {
    dispatch(changeIsLoading(true));

    const result = await fetchAllBooks(inputValue, sort, currentPage);
    dispatch(changeSearchResults(result));
    
    dispatch(changeIsLoading(false));
  };

  useEffect(() => {
    if(searchResults.length === 0) {
      getBooks();
    }
  }, [inputValue, sort, currentPage]);

  return (
    <Layout>
      <HeaderComponent />
      
      <Content>
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <BookList />
        )}
      </Content>
    </Layout>
  );
}
