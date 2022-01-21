import React from 'react'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core'
import {Book} from './App'

// App.tsxからinterfaceで宣言したBookを利用
interface BookProps {
    book: Book
}

const BookComponent: React.FC<BookProps> = ({book}) => {
  return (
    <Card style={{width: 200, marginTop: '8px'}}>
      <CardMedia 
        style={{height: 300,}}
        image={book.Item.largeImageUrl}
        title={`The book titled: ${book.Item.title}`}
        component='img'
      />
      <CardContent>
        <Typography component='h2'>『{book.Item.title}』</Typography>
        <Typography component='h2'>著者名：{book.Item.author}</Typography>
      </CardContent>
    </Card>
  )
}

export default BookComponent