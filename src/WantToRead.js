import React from 'react'
import Book from './Book'

const WantToRead = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Object.keys(props.books).filter((key) => props.books[key].shelf === 'wantToRead').map((key) => (
            <li key={props.books[key].id}><Book book={props.books[key]} changeStatus={props.changeStatus} /></li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default WantToRead