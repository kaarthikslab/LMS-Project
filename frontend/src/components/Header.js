import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Header({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="side-nav p-6">
        <h1 className="text-2xl font-bold text-white mb-8">LMS</h1>
        <ul className="space-y-4">
          {['dashboard', 'live', 'issued', 'restocked', 'settings'].map((section) => (
            <li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className="w-full text-left p-3 neumorphic-button text-white rounded-lg"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-64 p-6">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search books..."
            className="search-bar w-1/2 text-white placeholder-gray-300"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
