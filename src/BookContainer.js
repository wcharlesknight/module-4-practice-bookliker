import React from 'react'
import Book from './Book.js'

export default class BookContainer extends React.Component{

    render(){
        return(
            <ul> 
            {this.props.books.map(book => <Book book={book} key={book.id} selectedBook={this.props.selectedBook} /> )} 
            </ul>
        )
    }


}