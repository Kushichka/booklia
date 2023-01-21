import React, { useState } from 'react';
import axios from 'axios';
import { Layout, Pagination  } from 'antd';

import { CardSkeleton } from "../CardSkeleton";
import { BookList } from '../BookList';
import { HeaderComponent } from '../HeaderComponent';

import 'antd/dist/reset.css';
import './App.css';

const { Content } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [resultError, setResultError] = useState('');

  const onSearch = async (value) => {
    if (!value) return setSearchResults([]);

    setIsLoading(true);

    try {
      const res = await axios.get(`http://openlibrary.org/search.json?title=${value}`);

      if(res.data.docs.length > 0) {
        setSearchResults(res.data.docs);
      } else {
        setResultError('No Search Result Found!');
      }

    } catch (error) {
      setResultError('No Search Result Found!');
    }

    setIsLoading(false);
  }

  return (
    <>
      <Layout>

        <HeaderComponent
          onSearch={onSearch} 
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