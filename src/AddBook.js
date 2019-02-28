import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class AddBook extends React.Component {
  state = {
    books : [],
    query : ''
  }

  handleChange = (event) => {
    let query = event.target.value
    this.setState({query:query})
    query.length > 0
    ? BooksAPI.search(query)
        .then((books) => {
          books && books.length > 1
          ? this.setState({books:this.checkVal(books)})
          : this.setState({books:[]})
        })
    : this.setState({books:[]})

  }

  checkVal = (books) => {
    Object.keys(books).forEach((key) => {
      if (!('authors' in books[key])) books[key].authors = ['Anonymous']
      if (!('shelf' in books[key])) books[key].shelf = 'none'
      if (!('imageLinks' in books[key])) books[key].imageLinks = {smallThumbnail:'', thumbnail:''}
      Object.keys(this.props.books).forEach((innerKey) => {
        let book = this.props.books[innerKey]
        
        if (books[key].title === book.title) {
          books[key].shelf = book.shelf
        }
      })

    })
    return books
  }

  render() {
    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Object.keys(this.state.books).map((key) => (
            <li key={this.state.books[key].id}><Book book={this.state.books[key]} changeStatus={this.props.changeStatus} /></li>
          ))}
        </ol>
      </div>
      </div>
    )
  }
}

export default AddBook