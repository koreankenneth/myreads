import React from 'react'
import Book from './Book'

const CurrentlyReading = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Object.keys(props.books).filter((key) => props.books[key].shelf === 'currentlyReading').map((key) => (
            <li key={props.books[key].id}><Book book={props.books[key]} changeStatus={props.changeStatus} /></li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default CurrentlyReading