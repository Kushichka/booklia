import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Layout } from 'antd';

import { CardSkeleton } from "../CardSkeleton";
import { BookList } from '../BookList';
import { HeaderComponent } from '../HeaderComponent';
import { changeInputValue } from '../../redux/slices/bookSlice';

import 'antd/dist/reset.css';
import './App.css';

const { Content } = Layout;
const errorMessage = 'No Search Result Found!';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [resultError, setResultError] = useState('');
  const [sort, setSort] = useState('');

  const dispatch = useDispatch();
  const { inputValue } = useSelector(state => state.bookSlice)

  const onSearch = useCallback(async (inputValue, sortValue) => {
    if (!inputValue) return setSearchResults([]);

    setIsLoading(true);
    const sortBy = sortValue.length > 0 ? `&sort=${sortValue}` : '';
    const url = `http://openlibrary.org/search.json?title=${inputValue}${sortBy}&fields=*,availability`;
    // const url = `http://openlibrary.org/search.json?title=${inputValue}${sortBy}&fields=*,availability&limit=10&page=${currentPage}`;

    try {
      const res = await axios.get(url);

      if(res.data.docs.length > 0) {
        setSearchResults(res.data.docs);
      } else {
        setResultError(errorMessage);
      }

    } catch (error) {
      setResultError(errorMessage);
    }

    setIsLoading(false);

  }, []);

  const inputHandle = (value) => {
    dispatch(changeInputValue(value));
  }

  const changeSort = (value) => {
    value === 'relevance' ? setSort('') : setSort(value);
  }

  useEffect(() => {
    onSearch(inputValue, sort);
  }, [inputValue, sort]);

  return (
    <>
      <Layout>

        <HeaderComponent
          onSearch={inputHandle} 
          isLoading={isLoading}
        />

        <Content>
          {isLoading ? (
            <CardSkeleton />
          )
          :
          (
            <BookList
              searchResults={searchResults}
              resultError={resultError}
              changeSort={changeSort}
              sort={sort}
            />
          )}
        </Content>
        
      </Layout>
    </>
  );
};

export default App;