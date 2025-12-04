import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import LiveSection from './components/LiveSection';
import IssuedSection from './components/IssuedSection';
import RestockedSection from './components/RestockedSection';
import { supabase } from './utils/supabaseClient';

function App() {
  const [user, setUser] = useState(null);
  const [activeSection, setActiveSection] = useState('live');

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data }) => setUser(data.session?.user || null));
    supabase.auth.onAuthStateChange((event, session) => setUser(session?.user || null));
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
        <motion.div className="glass-card p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-2xl mb-4">Admin Login</h2>
          <button onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}>Login with Google</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <Header setActiveSection={setActiveSection} />
      {activeSection === 'live' && <LiveSection />}
      {activeSection === 'issued' && <IssuedSection />}
      {activeSection === 'restocked' && <RestockedSection />}
    </div>
  );
}

export default App;
