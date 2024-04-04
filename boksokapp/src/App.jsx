import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import BookList from './components/bookList';
import BookDetails from './components/bookDetails';
import './styles/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

    
    
    <main>
    <div className="App">
      
      <SearchBar onSearch={fetchBooks} />
      <BookList books={books} />
    
     
      <Routes>
         

      
          <Route path="/" element={<BookList books={books} />} />
          <Route path="/book/works/:id" element={<BookDetails />} />
      
      </Routes>

      
    </div>
    </main>
   
  );
}

export default App;
