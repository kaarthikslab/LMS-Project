import React, { useState } from 'react';
import { motion } from 'framer-motion';

const mockBooks = [
  { id: '1', code: 'BK001', name: 'Sample Book 1', publisher: 'Publisher A' },
  { id: '2', code: 'BK002', name: 'Sample Book 2', publisher: 'Publisher B' },
];

const mockDetails = {
  '1': {
    totalExpenditure: 500.00,
    logs: [
      { name: 'Student A', issued: '2023-10-01', due: '2023-10-15', returned: '2023-10-10', status: 'Returned' },
      { name: 'Student B', issued: '2023-10-05', due: '2023-10-20', returned: null, status: 'Overdue' },
    ],
  },
  '2': {
    totalExpenditure: 750.00,
    logs: [
      { name: 'Librarian X', issued: '2023-09-15', due: '2023-09-30', returned: '2023-09-28', status: 'Returned' },
    ],
  },
};

function IssuedSection() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl mb-8">Issued Section (Books Currently Out)</h2>
      <p className="mb-6 text-lg">Track issued books, due dates, and expenditures. Click a tile for distribution details.</p>
      {!selectedBook ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockBooks.map((book) => (
            <motion.div key={book.id} className="glass-card p-6 cursor-pointer" whileHover={{ y: -5 }} onClick={() => setSelectedBook(book)}>
              <h3 className="text-xl font-bold">{book.name}</h3>
              <p className="text-sm">{book.code}</p>
              <p className="text-xs">{book.publisher}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <div>
          <div className="fixed top-24 right-4 glass-card p-4">
            <p className="text-lg">Total Expenditure: <span className="accent-text">${mockDetails[selectedBook.id].totalExpenditure}</span></p>
          </div>
          <table className="glass-card w-full mt-16">
            <thead>
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Date Issued</th>
                <th className="p-4">Date Due</th>
                <th className="p-4">Date Returned</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockDetails[selectedBook.id].logs.map((log, index) => (
                <motion.tr key={index} className="hover:bg-blue-100" whileHover={{ scale: 1.02 }}>
                  <td className="p-4">{log.name}</td>
                  <td className="p-4">{log.issued}</td>
                  <td className="p-4">{log.due}</td>
                  <td className="p-4">{log.returned || 'N/A'}</td>
                  <td className="p-4 accent-text">{log.status}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setSelectedBook(null)} className="mt-4 neumorphic-button px-4 py-2">Back</button>
        </div>
      )}
    </div>
  );
}

export default IssuedSection;
