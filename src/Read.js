import React from 'react'
import Book from './Book'

const Read = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Object.keys(props.books).filter((key) => props.books[key].shelf === 'read').map((key) => (
            <li key={props.books[key].id}><Book book={props.books[key]} changeStatus={props.changeStatus} /></li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Read