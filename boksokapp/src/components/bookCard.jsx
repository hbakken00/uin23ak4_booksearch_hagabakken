import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, valgtBok }) => {
const { title, first_publish_year, author_name, cover_i, key, ratings_average } = book;

const bookId = book.key.split("/").pop();




  const coverImageUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : '/path/to/default/image.jpg'; // standar img  hvis den ikke finner fra api

  const amazonSearchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(book.title + " book")}`;  // amazone søkeurl som søker på bokens title fra api + "bok" for bedre søk

 




  return (
    // returnerer html i individuelle bok-kort med data fra api

    <article id="bookdata" onClick={() => valgtBok(book.key.split("/").pop())}>
   
      <img src={coverImageUrl} alt={`Cover of ${title}`} />

      <h3>{title}</h3>

      <p>Først publisert: {first_publish_year}</p>

      {author_name && <p>Forfattet av: {author_name.join(", ")}</p>}

      {book.ratings_average && <p> Gjennomsnittlig score: {book.ratings_average} / 5</p>}

      <a id="Amazonlink"href={amazonSearchUrl}target="_blank"rel="noopener noreferrer">Amazon Link</a>

      <Link
        id="merom"
        to={{
          pathname: `/book/works/${bookId}`,
          state: { cover_i, firstPublishYear: first_publish_year },}}>Mer om boken her!</Link>
    </article>
  );
};

export default BookCard;
