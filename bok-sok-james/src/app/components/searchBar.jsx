"use client";
import { useState, useEffect } from "react";




const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState("");
  const [pageisLoaded, setpageisLoaded] = useState(true); // state for å tracke onload 

  // fetch funksjon for å hente bøker
  const fetchBooks = (searchQuery) => {
    const searchURL = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;

    fetch(searchURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.docs);
      })
      .catch((error) => {
        console.error("Failed to fetch: ", error);
        setBooks([]);
      });
  };

  // effekt hook for å hente james bond på onload
  useEffect(() => {
    if (pageisLoaded) {
      fetchBooks("James Bond");
      setpageisLoaded(false); 
    }
  }, [pageisLoaded]); 
  const handleSearch = (event) => {
    event.preventDefault();

  // effekt hook for å hente james bond på onload  



  // if test for å sjekke om søket inneholder minst 3 bokstaver
    if (query.length < 3) {
      alert("Søket må inneholde minst 3 bokstaver");
      return;
    }
  // if test for å sjekke om søket inneholder minst 3 bokstaver



    fetchBooks(query); // bruker fetchBooks funksjonen for søkefunksjonaliteten ellers 
  };

  return (
    <div id="sokeBox">
      <div id="overskrift">
        <h2>Boksøk App</h2>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Søk her.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button id="Knapp" type="submit">
          Søk
        </button>
      </form>
    </div>
  );
};



export default SearchBar;
