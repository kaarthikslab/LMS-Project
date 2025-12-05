import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockRestocked } from '../utils/mockData';

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
