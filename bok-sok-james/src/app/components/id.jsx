
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function BookDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    // iftest for å sjekke om Router er sklar (for debug egentlig)
    if (!router.isReady || !id) return;

    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        //  `id` into the URL.
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [router.isReady, id]); // depender på `router.isReady` and `id`.

  // Loading state
  if (loading) return <div>Laster inn innhold...</div>;
  // Error state
  if (error) return <div>Error: {error}</div>;
  // No book details available
  if (!bookDetails) return <div>Bokdetaljer er ikke tilgjengelige.</div>;

  // displayer book details
  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quis voluptatem unde neque ipsa voluptatibus.</p>
      {/* mer detaljer her til senerer */}
    </div>
  );
}

export default BookDetails;

