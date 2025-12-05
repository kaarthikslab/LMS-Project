import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Inline mock data (no import needed)
const mockBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A', unit_price: 10.00, current_stock: 50, status: 'Available' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B', unit_price: 15.00, current_stock: 0, status: 'Out of Stock' },
];

function LiveSection() {
  const [books, setBooks] = useState(mockBooks);
  const [restockData, setRestockData] = useState({ quantity: 0, expenditure: 0, date: '' });

  const handleRestock = (bookId) => {
    alert(`Restocked book ${bookId} with ${restockData.quantity} units!`);
    setBooks(books.map(book =>
      book.id === bookId
        ? { ...book, current_stock: book.current_stock + restockData.quantity, status: (book.current_stock + restockData.quantity > 0) ? 'Available' : 'Out of Stock' }
        : book
    ));
  };

  const toggleStatus = (bookId) => {
    setBooks(books.map(book =>
      book.id === bookId ? { ...book, status: book.status === 'Available' ? 'Out of Stock' : 'Available' } : book
    ));
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Live Stock</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <motion.div key={book.id} className="glass-card p-6" whileHover={{ y: -5 }}>
            <h3 className="text-xl font-bold">{book.name}</h3>
            <p>Code: {book.code}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Unit Price: ${book.unit_price}</p>
            <p>Stock: {book.current_stock}</p>
            <p>Status: <span className={book.status === 'Available' ? 'text-green-500' : 'text-red-500'}>{book.status}</span></p>
            <button onClick={() => toggleStatus(book.id)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Toggle Status</button>
            <div className="mt-4">
              <input type="number" placeholder="Quantity" onChange={(e) => setRestockData({ ...restockData, quantity: parseInt(e.target.value) })} className="mr-2 p-1 border" />
              <input type="number" placeholder="Expenditure" onChange={(e) => setRestockData({ ...restockData, expenditure: parseFloat(e.target.value) })} className="mr-2 p-1 border" />
              <input type="date" onChange={(e) => setRestockData({ ...restockData, date: e.target.value })} className="mr-2 p-1 border" />
              <button onClick={() => handleRestock(book.id)} className="px-4 py-2 bg-green-500 text-white rounded">Restock</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LiveSection;
