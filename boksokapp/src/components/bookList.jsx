import React from 'react';
import BookCard from './bookCard';

const BookList = ({ books }) => {
  return (
    <div id="bookcard">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
