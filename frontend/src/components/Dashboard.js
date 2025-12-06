import React from 'react';
import { motion } from 'framer-motion';

function Dashboard() {
  const kpis = [
    { label: 'Total Books', value: 150 },
    { label: 'Total Issued', value: 45 },
    { label: 'Total Expenditure', value: '$12,500' },
    { label: 'Current Stock Status', value: '85% Available' },
  ];

  return (
    <div className="p-8 ml-64">
      <h2 className="text-3xl mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <motion.div key={index} className="glass-card p-6 text-center" whileHover={{ y: -5 }}>
            <h3 className="text-xl font-bold">{kpi.label}</h3>
            <p className="text-2xl accent-text">{kpi.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
