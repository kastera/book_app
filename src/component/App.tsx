import React, {useEffect, useState} from 'react'
import {
  CssBaseline,
  Container,
  Box,
} from '@material-ui/core'
import Header from './Header'
import Book from './Book'
import Search from './Search'
import axios from 'axios';

// 型の宣言を行う
export interface Book {
  Item: {
    author: string,
    isbn: string,
    itemCaption: string,
    itemPrice: number,
    itemUrl: string,
    largeImageUrl: string,
    mediumImageUrl: string,
    publisherName: string,
    salesDate: string,
    seriesName: string,
    smallImageUrl: string,
    subTitle: string,
    title: string
  }
}

const App: React.FC = () => {
  const [books, setBooks] = useState([]);
  const BOOK_API_URL = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&applicationId=1019575580845414227'

  useEffect( () => {
    axios.get(BOOK_API_URL).then((res)=> {
      setBooks(res.data.Items);
    })
  },[])

  const search = (searchValue: string): void => {
    const SEARCH_URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=2&title=${searchValue}&applicationId=1019575580845414227`

    axios.get(SEARCH_URL).then((res)=> {
      setBooks(res.data.Items);
    })
  }

  return (
    <React.Fragment>
      <Header text='書籍検索アプリ' />
        <Container component='main' maxWidth='md'>
          <CssBaseline/>
            <Box mt={4} textAlign='center'>
              <Search search={search}/>
            </Box>
            <Box mt={4} display='flex' flexWrap='wrap' justifyContent='space-around' > 
              {books.map((book: Book, index: number) => (
                  <Book key={`${index}-${book.Item.title}`} book={book}/>
              ))}      
            </Box>    
          </Container>
        </React.Fragment>
    )
}

export default App
