// components/BookCard.tsx
import React from 'react';
import Link from 'next/link';

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

const BookCard: React.FC<BookCardProps> = ({ id, title, author, price, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>By {author}</p>
    <p>Price: ${price}</p>
    <Link href={`/books/${id}`}>View Details</Link>
  </div>
);

export default BookCard;
