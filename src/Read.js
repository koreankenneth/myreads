import React from 'react'
import Book from './Book'

const Read = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.filter(book => book.status === 'R').map((book) => (
              <li><Book book={book}/></li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Read