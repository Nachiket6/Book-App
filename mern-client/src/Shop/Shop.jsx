import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  const handleBuyNow = (bookPdfUrl) => {
    // Open bookPdfUrl in a new tab
    window.open(bookPdfUrl, '_blank');
  };
  return (
    <div className='bg-teal-100 mt-14 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center pt-4'> All Books are here</h2>
      <div className='grid gap-8 py-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
          >
            <img src={book.imageUrl} alt="" className='h-96 w-full' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className="truncate font-normal text-gray-700 dark:text-gray-400">
                {book.bookTitle}
              </p>
            </h5>
            <p className="truncate font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>
            <button onClick={() => handleBuyNow(book.bookPdfUrl)} className='bg-blue-700 hover:bg-black font-semibold text-white py-2 rounded'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop