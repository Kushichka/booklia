import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd"

import { CardSkeleton } from "../../components/CardSkeleton";
import { BookList } from '../../components/BookList';
import { HeaderComponent } from "../../components/HeaderComponent"
import { getBooks } from '../../redux/slices/bookSlice';

import 'antd/dist/reset.css';
import './homePage.css';

const { Content } = Layout;

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, sort, currentPage, inputValue } = useSelector(state => state.bookSlice);


  useEffect(() => {
    dispatch(getBooks({inputValue, sort, currentPage}));       
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
