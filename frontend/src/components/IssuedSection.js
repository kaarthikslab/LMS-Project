import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockIssued } from '../utils/mockData';

function IssuedSection() {
  const [logs, setLogs] = useState(mockIssued.logs);
  const [totalExpense, setTotalExpense] = useState(mockIssued.totalExpense);

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Issued Logs</h2>
      <table className="glass-card w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="p-4">Date</th>
            <th className="p-4">Book</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <motion.tr key={log.id} className="hover:bg-blue-100" whileHover={{ scale: 1.02 }}>
              <td className="p-4">{log.date}</td>
              <td className="p-4">{log.books.name}</td>
              <td className="p-4">{log.quantity}</td>
              <td className="p-4">${log.total_price}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 p-4 glass-card">
        <p className="text-xl font-bold">Total Expense: ${totalExpense}</p>
      </div>
    </div>
  );
}

export default IssuedSection;
