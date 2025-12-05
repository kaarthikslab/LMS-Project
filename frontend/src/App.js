import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import LiveSection from './components/LiveSection';
import IssuedSection from './components/IssuedSection';
import RestockedSection from './components/RestockedSection';

function App() {
  const [user, setUser] = useState({});  // Mock logged-in user (bypasses auth)
  const [activeSection, setActiveSection] = useState('live');

  // Mock auth check (no real Supabase)
  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
        <motion.div className="glass-card p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-2xl mb-4">Welcome to LMS</h2>
          <p>Mock login bypassed for testing. Click to proceed.</p>
          <button onClick={() => setUser({ id: 'mock-user' })} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Enter App</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <Header setActiveSection={setActiveSection} />
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
      >
        {activeSection === 'live' && <LiveSection />}
        {activeSection === 'issued' && <IssuedSection />}
        {activeSection === 'restocked' && <RestockedSection />}
      </motion.div>
    </div>
  );
}

export default App;
