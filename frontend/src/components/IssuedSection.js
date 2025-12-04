import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function IssuedSection() {
  const [logs, setLogs] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    fetchIssued();
  }, []);

  const fetchIssued = async () => {
    const { data } = await axios.get('http://localhost:5000/api/books/issued');
    setLogs(data.logs);
    setTotalExpense(data.totalExpense);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Issued Logs</h2>
      <table className="glass-card w-full">
        <thead>
          <tr><th>Date</th><th>Book</th><th>Quantity</th><th>Total Price</th></tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.date}</td><td>{log.books.name}</td><td>{log.quantity}</td><td>${log.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4">Total Expense: ${totalExpense}</p>
    </div>
  );
}

export default IssuedSection;
