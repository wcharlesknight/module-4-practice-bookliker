import React from "react";
import {
  Container,
  Header,
  Menu,
  Button,
  Image
} from "semantic-ui-react";
import BookContainer from './BookContainer'
import UserContainer from './UserContainer'


export default class App extends React.Component {
  
  state = {
    books: [], 
    selectedBook: '',
    likedBook: []
  }

  componentDidMount(){
    this.getBooks()
  }

  // componentDidUpdate(){
  //   this.getBooks()
  // }
  
  getBooks = () => {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(books => {
        this.setState({
          books: books
        })
      })
  }
  // componentDidUpdate(){
  //   this.render()
  // }

  // likedBook = (likers) => { 
    
  //   this.setState({
  //     likedBook: 
  //   })
  // }

  patchBook = (book) => {
    let ifLiked = false
    book.users.forEach(user => {
      if (user.id === 1){ ifLiked = true}
    })
    if (!ifLiked) {

    let addUser = {id:1, username:"pouros"}
    fetch(`http://localhost:3000/books/${book.id }`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({users: [...this.state.selectedBook.users, addUser]})
    }) .then(res => res.json())
       .then(data => {
         this.setState({
           selectedBook: data 
         })
      })
  }
    
  }
  

  selectBook = (bookId) => {
    let selectedB = this.state.books.find(book => book.id === bookId)
    this.setState({
      selectedBook: selectedB
    } )
  }
  
  render(){
  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Bookliker</Menu.Item>
      </Menu>
      <main>
        <Menu vertical inverted>
          <Menu.Item >
            Book title
            <BookContainer  books={this.state.books} selectedBook={this.selectBook} />
          </Menu.Item>
        </Menu>
        <Container text>
          
          <Header>Book title</Header>
           {this.state.selectedBook.title}
          <Image
            src={this.state.selectedBook.img_url}
            size="small"
          />
          <p>Book description</p>
              {this.state.selectedBook.description}
          <Button
            onClick={() => this.patchBook(this.state.selectedBook)}
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "2,048"
            }}
          />
          <Header>Liked by
            <UserContainer book={this.state.selectedBook} />
            </Header>
        </Container>
      </main>
    </div>
  );
  }
}


