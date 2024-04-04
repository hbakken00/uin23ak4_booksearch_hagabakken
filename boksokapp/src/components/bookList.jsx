import React from 'react';
import BookCard from './bookCard';

// Legg til onSelectBook prop til funksjonens parametere
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




