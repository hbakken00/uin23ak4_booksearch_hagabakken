// søkefelt 
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {     // funksjon for å håpndtere søk 
    event.preventDefault();
    if (query.length >= 3) {    // if test for å sjekke om det minimum  er 3 bokstaver skrvet inn 
      onSearch(query);
    }
  };
  

  return (      // returnerer html for søkefelt og knapp
    <div id="sokeBox">
    <div id="overskrift">
      <h2>Boksøk App</h2>
    </div>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Søk etter bøker..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id='Knapp' type="submit"> <a>Søk</a> </button>
    </form>
    </div>
  );
};

export default SearchBar;
