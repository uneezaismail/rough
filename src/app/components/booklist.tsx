// components/BookList.tsx
'use client'
import React, { useEffect, useState } from 'react';
import BookCard from './bookcard';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  image: string;
};

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
};

export default BookList;
