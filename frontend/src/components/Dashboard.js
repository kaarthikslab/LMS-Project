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
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-4xl mb-8 text-center">Dashboard</h2>
      {/* Image Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div className="image-placeholder" whileHover={{ y: -5 }}>
          <span>Image Placeholder 1 (e.g., Book Cover)</span>
        </motion.div>
        <motion.div className="image-placeholder" whileHover={{ y: -5 }}>
          <span>Image Placeholder 2 (e.g., Library Photo)</span>
        </motion.div>
        <motion.div className="image-placeholder" whileHover={{ y: -5 }}>
          <span>Image Placeholder 3 (e.g., Stats Chart)</span>
        </motion.div>
      </div>
      {/* KPI Cards */}
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
