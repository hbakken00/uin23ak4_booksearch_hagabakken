import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import BookList from './components/bookList';
import './styles/style.css';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = (searchQuery) => {
    const searchURL = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;

    fetch(searchURL)      // fetch for å hente bøker fra søkeurl 
      .then(response => response.json())
      .then(data => {
        setBooks(data.docs);  
      })
      .catch(error => {       // error i consoll hvis fetchen ikke går
        console.error("Failed to fetch: ", error);
      });
  };

  useEffect(() => {  // hook for å hente james bond bøkene først 
    fetchBooks("James Bond");
  }, []);

  return (
    <body>
      
    
    <main>
    <div className="App">
      <SearchBar onSearch={fetchBooks} />
      <BookList books={books} />
    </div>
    </main>
    </body>
  );
}

export default App;
