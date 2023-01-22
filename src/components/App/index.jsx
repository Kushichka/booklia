import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Layout } from 'antd';

import { CardSkeleton } from "../CardSkeleton";
import { BookList } from '../BookList';
import { HeaderComponent } from '../HeaderComponent';

import 'antd/dist/reset.css';
import './App.css';
import { useEffect } from 'react';

const { Content } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [resultError, setResultError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [sort, setSort] = useState('');

  const onSearch = useCallback(async (inputValue, sortValue) => {
    if (!inputValue) return setSearchResults([]);

    setIsLoading(true);
    const sortBy = sortValue.length > 0 ? `&sort=${sortValue}` : '';
    const url = `http://openlibrary.org/search.json?title=${inputValue}${sortBy}`;

    try {
      const res = await axios.get(url);

      if(res.data.docs.length > 0) {
        setSearchResults(res.data.docs);
      } else {
        setResultError('No Search Result Found!');
      }

    } catch (error) {
      setResultError('No Search Result Found!');
    }

    setIsLoading(false);

  }, []);

  const inputHandle = (value) => {
    setInputValue(value);
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