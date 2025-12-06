import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockRestockedBooks, mockRestockedLogs } from '../utils/mockData';

function RestockedSection() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl mb-8">Restocked Section (Log History)</h2>
      <p className="mb-6 text-lg">View restocking history for books. Click a tile for the timeline log.</p>
      {!selectedBook ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockRestockedBooks.map((book) => (
            <motion.div key={book.id} className="glass-card p-6 cursor-pointer" whileHover={{ y: -5 }} onClick={() => setSelectedBook(book)}>
              <h3 className="text-xl font-bold">{book.name}</h3>
              <p className="text-sm">{book.code}</p>
              <p className="text-xs">{book.publisher}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div>
          <h3 className="text-2xl mb-6">Restocking Log for {selectedBook.name}</h3>
          <div className="space-y-4">
            {mockRestockedLogs[selectedBook.id].map((log, index) => (
              <motion.div key={index} className="glass-card p-6" whileHover={{ y: -5 }}>
                <p className="text-lg font-bold">{log.date}</p>
                <p>Quantity: <span className="accent-text">{log.quantity}</span></p>
                <p>Unit Price: ${log.unitPrice}</p>
                <p className="text-sm">Supplier: {log.supplier}</p>
              </motion.div>
            ))}
          </div>
          <button onClick={() => setSelectedBook(null)} className="mt-4 neumorphic-button px-4 py-2">Back</button>
        </div>
      )}
    </div>
  );
}

export default RestockedSection;
