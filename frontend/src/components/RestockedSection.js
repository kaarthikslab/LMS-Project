import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Inline mock data
const mockRestocked = [
  { id: '1', date: '2023-10-01', books: { name: 'Sample Book 1' }, quantity: 20, expenditure: 100.00 },
  { id: '2', date: '2023-10-03', books: { name: 'Sample Book 2' }, quantity: 10, expenditure: 50.00 },
];

function RestockedSection() {
  const [logs, setLogs] = useState(mockRestocked);

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Restocked Logs</h2>
      <div className="space-y-4">
        {logs.map((log) => (
          <motion.div key={log.id} className="glass-card p-6" whileHover={{ y: -5, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}>
            <p className="text-lg font-semibold">Date: {log.date}</p>
            <p>Book: {log.books.name}</p>
            <p>Quantity Restocked: {log.quantity}</p>
            <p>Expenditure: ${log.expenditure}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RestockedSection;
