import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <div className="min-h-screen">
      <nav className="top-nav">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">LMS</h1>
          <div className="flex space-x-6">
            {['dashboard', 'live', 'issued', 'restocked'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className="px-6 py-3 neumorphic-button text-white text-lg font-semibold rounded-lg hover:scale-105"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="pt-24"  // Space for top nav
      >
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'live' && <LiveSection />}
        {activeSection === 'issued' && <IssuedSection />}
        {activeSection === 'restocked' && <RestockedSection />}
      </motion.div>
    </div>
  );
}

export default App;
