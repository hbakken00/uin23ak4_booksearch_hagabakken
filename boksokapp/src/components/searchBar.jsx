// søkefelt
import React, { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")
  
  // funksjon for å håpndtere søk
  const handleSearch = (event) => {
    event.preventDefault()

    if (query.length < 3) {
      // if test for å sjekke om det minimum  er 3 bokstaver skrvet inn
      alert("Søket må inneholde minst 3 bokstaver")
      return
    } onSearch(query)
  }

  
  return (
    // returnerer html for søkefelt og knapp
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
        <button id="Knapp" type="submit">
          {" "}
          <a>Søk</a>{" "}
        </button>
        <button id="Knapphjem" type="submit">
          {" "}
        <a href="/"> Reset / hjem </a>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
