import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(response => response.json())
      .then(data => setBookDetails(data))
      .catch(error => console.error("Feil ved henting av bokdetaljer:", error));
  }, [id]);

  if (!bookDetails) return <p>Laster...</p>;

  return (
    <div>
      <h1>{bookDetails.title}</h1>
      <p> {bookDetails.id} </p>
    </div>
  );
}

export default BookDetails;
