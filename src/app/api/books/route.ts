// // app/api/books/route.ts
// import { NextResponse } from 'next/server';

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   price: number;
//   description: string;
//   image: string;
// };

// const books: Book[] = [
//   { id: 1, title: "Eloquent JavaScript", author: "Marijn Haverbeke", price: 20, description: "Learn JavaScript deeply.", image: "/next.svg" },
//   { id: 2, title: "You Don’t Know JS", author: "Kyle Simpson", price: 25, description: "JavaScript fundamentals in depth.", image: "/next.svg" },
//   { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 18, description: "The best parts of JS.", image: "/next.svg" },
// ];


// //get all books


// // export async function GET(req:Request) {
// //     console.log(req)
// //   return NextResponse.json(books);
// // }


// // search book by id

// // export async function GET(req: Request) {
// //   const { searchParams } = new URL(req.url);
// //   const id = Number(searchParams.get('id'));

// //   const book = books.find((b) => b.id === id);

// //   if (book) {
// //     return NextResponse.json(book);
// //   } else {
// //     return NextResponse.json({ error: "Book not found" }, { status: 404 });
// //   }
// // }


// // search book by author

// // export async function GET(req: Request) {
// //     const { searchParams } = new URL(req.url);
// //     const author = searchParams.get('author');
  
// //     const filteredBooks = books.filter((book) => book.author === author);
  
// //     if (filteredBooks.length > 0) {
// //       return NextResponse.json(filteredBooks);
// //     } else {
// //       return NextResponse.json({ error: "No books found for this author" }, { status: 404 });
// //     }
// //   }


// // search book by pricing

// // export async function GET(req: Request) {
// //   const { searchParams } = new URL(req.url);
// //   const minPrice = Number(searchParams.get('minPrice') || '0');
// //   const maxPrice = Number(searchParams.get('maxPrice') || 'Infinity');

// //   const filteredBooks = books.filter(book => book.price >= minPrice && book.price <= maxPrice);

// //   return NextResponse.json(filteredBooks);
// // }



// // search book by title 

// // export async function GET(req: Request) {
// //   const { searchParams } = new URL(req.url);
// //   const query = searchParams.get('query')?.toLowerCase() || '';

// //   const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));

// //   return NextResponse.json(filteredBooks);
// // }



// // app/api/books/route.ts
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   // Parse the JSON body data
//   const data = await req.json();

//   // Example: Adding a new book to the "database" (in our case, we'll just log it)
//   const newBook = {
//     id: Date.now(), // Unique ID for our new book
//     title: data.title,
//     author: data.author,
//     price: data.price,
//   };

//   // Here, we'd normally save `newBook` to a database.
//   console.log("New book added:", newBook);

//   // Respond with a confirmation message
//   return NextResponse.json({
//     message: "Book added successfully!",
//     book: newBook,
//   });
// }



// /pages/api/books.ts
import { NextApiRequest, NextApiResponse } from 'next';

const books = [
  { id: 1, title: "Eloquent JavaScript", price: 20, description: "Learn JavaScript deeply." },
  { id: 2, title: "You Don’t Know JS", price: 25, description: "JavaScript fundamentals in depth." },
  { id: 3, title: "JavaScript: The Good Parts", price: 18, description: "The best parts of JS." },
];

export function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  // If there’s a search query, filter books by title
  const filteredBooks = query
    ? books.filter((book) =>
        book.title.toLowerCase().includes((query as string).toLowerCase())
      )
    : books;

  res.status(200).json(filteredBooks);
}
