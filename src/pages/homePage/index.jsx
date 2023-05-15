import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd"

import { CardSkeleton } from "../../components/CardSkeleton";
import { BookList } from '../../components/BookList';
import { HeaderComponent } from "../../components/HeaderComponent"
import { getAllBooks } from '../../redux/slices/homePageSlice';

import 'antd/dist/reset.css';
import './homePage.css';

const { Content } = Layout;

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, sort, currentPage, inputValue } = useSelector(state => state.homePageSlice);

  useEffect(() => {
    dispatch(getAllBooks({inputValue, sort, currentPage})); 
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
