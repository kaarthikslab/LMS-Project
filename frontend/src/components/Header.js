import React from 'react';
import { motion } from 'framer-motion';

function Header({ setActiveSection }) {
  return (
    <motion.header className="glass-card p-4 mb-8" initial={{ y: -50 }} animate={{ y: 0 }}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">Library Management System</h1>
        <nav className="space-x-4">
          <button onClick={() => setActiveSection('live')} className="hover:text-blue-600">Live</button>
          <button onClick={() => setActiveSection('issued')} className="hover:text-blue-600">Issued</button>
          <button onClick={() => setActiveSection('restocked')} className="hover:text-blue-600">Restocked</button>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
