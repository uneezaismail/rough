// app/books/[id]/page.tsx
import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  image: string;
};

async function getBook(id: number): Promise<Book | undefined> {
  const response = await fetch(`http://localhost:3000/api/books`);
  const books: Book[] = await response.json();
  return books.find(book => book.id === id);
}

export default async function BookPage({ params }: { params: { id: string } }) {
  const book = await getBook(parseInt(params.id));

  if (!book) return <div>Book not found</div>;

  return (
    <main>
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>Price: ${book.price}</p>
      <p>{book.description}</p>
    </main>
  );
}
