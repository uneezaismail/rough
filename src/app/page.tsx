// app/page.tsx
import React from 'react';
import BookList from './components/booklist';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to My eBook Store</h1>
      <BookList/>
    </main>
  );
}
