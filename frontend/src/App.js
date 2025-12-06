import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LiveSection from './components/LiveSection';
import IssuedSection from './components/IssuedSection';
import RestockedSection from './components/RestockedSection';

function App() {
  const [user, setUser] = useState({});  // Mock logged-in
  const [activeSection, setActiveSection] = useState('dashboard');

  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div className="glass-card p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-2xl mb-4">Welcome to LMS</h2>
          <button onClick={() => setUser({ id: 'mock-user' })} className="neumorphic-button px-6 py-2">Enter</button>
        </motion.div>
      </div>
    );
  }

  return (
