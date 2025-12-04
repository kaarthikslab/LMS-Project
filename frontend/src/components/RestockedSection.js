import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function RestockedSection() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchRestocked();
  }, []);

  const fetchRestocked = async () => {
    const { data } = await axios.get('http://localhost:5000/api/books/restocked');
    setLogs(data);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Restocked Logs</h2>
      <div className="space-y-4">
        {logs.map((log) => (
          <motion.div key={log.id} className="glass-card p-4" whileHover={{ y: -5 }}>
            <p>Date: {log.date}</p>
            <p>Book: {log.books.name}</p>
            <p>Quantity: {log.quantity}</p>
            <p>Expenditure: ${log.expenditure}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RestockedSection;
