import React from 'react';

const BookCard = ({ book }) => {
  const coverImageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : '/path/to/default/image.jpg'; // standar img  hvis den ikke finner fra api

  const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(book.title + " book")}`;  // amazone søkeurl som søker på bokens title fra api + "bok" for bedre søk

  return (      // returnerer html i individuelle bok-kort med data fra api
    <div id="bookdata">     
      <img src={coverImageUrl} alt={`Cover of ${book.title}`} />
      <h3>{book.title}</h3>
      <p>Først publisert:  {book.first_publish_year}</p>
      {book.author_name && <p>Forfattet av: {book.author_name.join(', ')}</p>}
      <a id='Amazonlink' href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">Amazon Link</a>
    </div>
  );
};

export default BookCard;
