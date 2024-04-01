"use client";
import { useState } from 'react';
import styles from './styles/styles.css';
import SearchBar from './components/searchBar';
import BookList from './components/bookList';

export default function Home() {
  const [books, setBooks] = useState([]);

  return (
    
    <body>
    <main>
      <br></br>
      <SearchBar setBooks={setBooks} />
      <BookList books={books} />
    </main>
    </body>
  );
}
