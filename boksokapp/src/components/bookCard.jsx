import React from 'react';
import { Link } from 'react-router-dom';



const BookCard = ({ book }) => {
  const { title, first_publish_year, author_name, cover_i, key: id } = book;

  const coverImageUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : '/path/to/default/image.jpg'; // standar img  hvis den ikke finner fra api

  const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(book.title + " book")}`;  // amazone søkeurl som søker på bokens title fra api + "bok" for bedre søk
  

  return (      // returnerer html i individuelle bok-kort med data fra api
    <div id="bookdata">     
      <img src={coverImageUrl} alt={`Cover of ${title}`} />
      <h3>{title}</h3>
      <p>Først publisert:  {first_publish_year}</p>
      {author_name && <p>Forfattet av: {author_name.join(', ')}</p>}
      <a id='Amazonlink' href={amazonSearchUrl} target="_blank" rel="noopener noreferrer">Amazon Link</a>
     
      <Link to={`/book/works/${id}`}>Mer om boka</Link> 


    </div>
  );
};

export default BookCard;
