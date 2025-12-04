import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function LiveSection() {
  const [books, setBooks] = useState([]);
  const [restockData, setRestockData] = useState({ quantity: 0, expenditure: 0, date: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const { data } = await axios.get('http://localhost:5000/api/books');
    setBooks(data);
  };

  const handleRestock = async (bookId) => {
    await axios.put(`http://localhost:5000/api/books/${bookId}/update-stock`, restockData);
    fetchBooks();
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Live Stock</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <motion.div key={book.id} className="glass-card p-6" whileHover={{ y: -5 }}>
            <h3>{book.name}</h3>
            <p>Code: {book.code}</p>
            <p>Stock: {book.current_stock}</p>
            <p>Status: {book.status}</p>
            <button onClick={() => handleRestock(book.id)}>Restock</button>
            {/* Add form for restockData inputs */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LiveSection;
