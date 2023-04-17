import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd"

import { fetchAPI } from '../../API/fetchAPI';
import { CardSkeleton } from "../../components/CardSkeleton";
import { BookList } from '../../components/BookList';
import { HeaderComponent } from "../../components/HeaderComponent"
import { changeSearchResults, changeResultError, changeIsLoading } from '../../redux/slices/bookSlice';

import 'antd/dist/reset.css';
import './homePage.css';

const { Content } = Layout;

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, sort, currentPage, inputValue } = useSelector(state => state.bookSlice);

  const fetchAPIMemo = useMemo(() => {
    return async () => {
      dispatch(changeIsLoading(true));
  
      const res = await fetchAPI(inputValue, sort, currentPage);
  
      if (res === null || res.data.docs.length === 0) {
        dispatch(changeResultError('No Search Result Found!'));

      } else dispatch(changeSearchResults(res.data));
  
      dispatch(changeIsLoading(false));
  
    }
  }, [inputValue, sort, currentPage]);

  useEffect(() => {
    fetchAPIMemo(inputValue, sort, currentPage);          
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
};
