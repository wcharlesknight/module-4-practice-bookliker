import React from 'react'

export default class Book extends React.Component{

    render(){
        return(
            <li as={"a"} onClick={() => this.props.selectedBook(this.props.book.id)} >{this.props.book.title}</li>
        )
    }


}