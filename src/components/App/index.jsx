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

  const onSearch = useCallback(async (inputValue) => {
    if (!inputValue) return setSearchResults([]);

    setIsLoading(true);

    try {
      const res = await axios.get(`http://openlibrary.org/search.json?title=${inputValue}`);

      if(res.data.docs.length > 0) {
        setSearchResults(res.data.docs);
      } else {
        setResultError('No Search Result Found!');
      }

    } catch (error) {
      setResultError('No Search Result Found!');
    }

    setIsLoading(false);
  }, [inputValue]);

  const inputHandle = (value) => {
    setInputValue(value);
  }

  useEffect(() => {
    onSearch(inputValue);
  }, [inputValue]);

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
            />
          )}
        </Content>
        
      </Layout>
    </>
  );
};

export default App;