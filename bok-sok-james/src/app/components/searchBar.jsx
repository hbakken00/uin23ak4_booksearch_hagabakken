"use client";
import { useState } from "react";

const SearchBar = ({ setBooks }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    if (query.length < 3) {
      alert("Søket må inneholde minst 3 bokstaver");
      return;
    }

    const searchURL = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      query
    )}`;

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
          {" "}
          <a>Søk</a>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
