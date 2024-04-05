import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import BookList from "./components/bookList";
import BookDetails from "./components/bookDetails";
import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 


function App() {
  const [books, setBooks] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true); // state for å tracke om siden er loadet

  const fetchBooks = (searchQuery) => {
    const searchURL = `https://openlibrary.org/search.json?q=${encodeURIComponent(
      searchQuery
    )}`;

    fetch(searchURL) // fetch for å hente bøker fra søkeurl
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
        if (initialLoad) {
          setInitialLoad(false); // iftest for å sjekke om siden er loadet, og hvis den er loadet så sett state til false
        }
      })
      .catch((error) => {
        // error i consoll hvis fetchen ikke går
        console.error("Failed to fetch: ", error);
      });
  };

  // hook for å hente james bond bøkene først som bare kjører hvis setInitialLoad er true
  useEffect(() => {
    if (initialLoad) {
      fetchBooks("James Bond");
    }
  }, [initialLoad]);
  
  

  return (
    <main>
      <div className="App">
        <SearchBar onSearch={fetchBooks}  />

        <Routes>
          <Route path="/book/works/:id" element={<BookDetails />} />
        </Routes>
        
        <BookList books={books}/> 
      </div>
    </main>
  );
}

export default App;
