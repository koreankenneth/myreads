import React from 'react'
import Book from './Book'

const CurrentlyReading = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.filter(book => book.status === 'CR').map((book) => (
              <li><Book book={book}/></li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default CurrentlyReading