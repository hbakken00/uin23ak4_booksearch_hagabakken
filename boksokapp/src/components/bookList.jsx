import React from 'react';
import BookCard from './bookCard';


const BookList = ({ books }) => {
  return (
    <section id="bookcard">
      {books.map((book, index) => (
        <BookCard key={index} book={book}  />
      ))}
    </section>
  );
}

export default BookList;




