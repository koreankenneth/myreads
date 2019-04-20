import React from 'react';

const Book = (props) => {
  const handleChange = (event) => {
    props.changeStatus(props.book, event.target.value)
  }
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select onChange={handleChange} defaultValue={props.book.shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading" key="currentlyReading">Currently Reading</option>
            <option value="wantToRead" key="wantToRead">Want to Read</option>
            <option value="read" key="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors.map((author) => 
        <div className="book-authors" key={author} >{author}</div>
      )}
    </div>
  )
}

export default Book