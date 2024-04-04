import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const { id } = useParams()
  const [bookDetails, setBookDetails] = useState(null)

  // Accessing the passed "first published" year and cover_i from location state
 
 
 
  useEffect(() => {
    // fetcher fra work API først 
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then(response => response.json())
      .then(data => {
        setBookDetails(data) // lagrer data fra fetchen 
        // bruker tittelen på boka fra work api til å søke etter boka i search apien
        const titleQuery = encodeURIComponent(data.title);
        return fetch(`https://openlibrary.org/search.json?q=${titleQuery}&limit=1`) // litmiterer søket til 1 resultat
      })



      .then(response => response.json())
      .then(searchData => {
        if (searchData.docs.length > 0) {
          const searchResult = searchData.docs[0]

      
          // if test for å sjekke om cover_i er funnet i resultatene og oppdaterer bookDetails 

          if (searchResult.cover_i) {
            setBookDetails(prevDetails => ({
              ...prevDetails,
              cover_i: searchResult.cover_i
            }))
          }
        }
      })
      .catch(error => console.error("Error fetching book details:", error))
  }, [id])


  

  if (!bookDetails) return <h4> laster inn ... </h4>

  
  const coverImageUrl = bookDetails.cover_i
    ? `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`
    : '/path/to/default/image.jpg'

 

  return (
    <div id='BokDetaljer'>   
      <section>
     
      <h1>{bookDetails.title}</h1>
      <img src={coverImageUrl} alt={`Cover of ${bookDetails.title}`} />
      </section>
      <section>
      <h3>Beskrivelse:</h3>
      {bookDetails.author_name && <p>{bookDetails.author_name.join(', ')}</p>}
      {bookDetails.description && <p>{typeof bookDetails.description === 'string' ? bookDetails.description : bookDetails.description.value}</p>}
      {bookDetails.subjects && <p>{bookDetails.subjects.join(', ')}</p>}
      </section>

    </div>
  )
}

export default BookDetails
