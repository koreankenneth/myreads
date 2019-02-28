import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import AddBook from './AddBook'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books : this.checkVal(books)})
      })
  }

  changeStatus = (b, shelf) => {
    let index = this.findObjByProp(this.state.books, 'title', b.title)
    let newBooks = [];
    
    BooksAPI.update(b, shelf)
    .then((books) => {
      this.setState(() => {
        if (index === -1)  {
          b.shelf = shelf
          newBooks = [...this.state.books, b]
        } else {
          newBooks = this.state.books
          newBooks[index].shelf = shelf
        }
        return {books: this.checkVal(newBooks)}
      })
    })
  }

  findObjByProp = (arr, PropName, PropVal) => {
    let index = -1

    for (let i = 0; i < arr.length; i++) {
      const book = arr[i];

      if (book[PropName] === PropVal) index = i
    }

    return index
  }

  checkVal = (books) => {
    Object.keys(books).forEach((key) => {
      if (!('authors' in books[key])) books[key].authors = ['Anonymous']
      if (!('shelf' in books[key])) books[key].shelf = 'none'
      if (!('imageLinks' in books[key])) books[key].imageLinks = {smallThumbnail:'', thumbnail:''}
    })
    return books
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.books} changeStatus={this.changeStatus} />
                <WantToRead books={this.state.books} changeStatus={this.changeStatus} />
                <Read books={this.state.books} changeStatus={this.changeStatus} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/addbook">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path="/addbook" render={() => (
          <AddBook books={this.state.books} changeStatus={this.changeStatus} />
        )} />
      </div>
    )
  }
}

export default BooksApp
