import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Inline mock data
const mockBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A', unit_price: 10.00, current_stock: 50, status: 'Available' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B', unit_price: 15.00, current_stock: 0, status: 'Out of Stock' },
  { id: '3', code: 'BK003', name: 'Sample Book 3', publisher: 'Publisher C', unit_price: 20.00, current_stock: 30, status: 'Available' },
  { id: '4', code: 'BK004', name: 'Sample Book 4', publisher: 'Publisher D', unit_price: 12.00, current_stock: 10, status: 'Low Stock' },
];

function LiveSection() {
  const [books, setBooks] = useState(mockBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [restockData, setRestockData] = useState({ quantity: 0, expenditure: 0, date: '' });

  const handleRestock = () => {
    alert(`Restocked ${selectedBook.name}!`);
    setSelectedBook(null);
  };

  const toggleStatus = (id) => {
    setBooks(books.map(book => book.id === id ? { ...book, status: book.status === 'Available' ? 'Out of Stock' : 'Available' } : book));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl mb-8">Live Section (Stock Available)</h2>
      <p className="mb-6 text-lg">Browse and manage available books. Click a tile for details, toggle status, or restock.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <motion.div key={book.id} className="glass-card p-6 cursor-pointer" whileHover={{ y: -5 }} onClick={() => setSelectedBook(book)}>
            <h3 className="text-xl font-bold">{book.name}</h3>
            <p className="text-sm">{book.code}</p>
            <p className="text-xs">{book.publisher}</p>
          </motion.div>
        ))}
      </div>
      {selectedBook && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="glass-card p-8 w-1/2">
            <h3 className="text-2xl">{selectedBook.name}</h3>
            <p>Unit Price: ${selectedBook.unit_price}</p>
            <p>Stock: {selectedBook.current_stock}</p>
            <p>Status: <span className="accent-text">{selectedBook.status}</span></p>
            <button onClick={() => toggleStatus(selectedBook.id)} className="neumorphic-button px-4 py-2 mt-4">Toggle Status</button>
            <div className="mt-4">
              <input type="number" placeholder="Quantity" onChange={(e) => setRestockData({ ...restockData, quantity: parseInt(e.target.value) })} className="mr-2 p-2 border rounded" />
              <input type="number" placeholder="Expenditure" onChange={(e) => setRestockData({ ...restockData, expenditure: parseFloat(e.target.value) })} className="mr-2 p-2 border rounded" />
              <input type="date" onChange={(e) => setRestockData({ ...restockData, date: e.target.value })} className="mr-2 p-2 border rounded" />
              <button onClick={handleRestock} className="neumorphic-button px-4 py-2 accent-text">Restock Book</button>
            </div>
            <button onClick={() => setSelectedBook(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default LiveSection;
