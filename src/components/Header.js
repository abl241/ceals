import React, { useState, useEffect } from 'react';
import './Header.css';

const tabs = [
  { id: 'hero', label: 'Home' },
  { id: 'mission', label: 'Mission' },
  { id: 'product', label: 'Product' },
  { id: 'team', label: 'Team' },
  { id: 'future', label: 'Future' }
];
function Header() {
  const [activeTab, setActiveTab] = useState('hero');
  useEffect(() => {
    const sectionIds = tabs.map(tab => tab.id);
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveTab(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveTab('hero');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);
  

  const handleTabClick = (tabId) => {
    const section = document.getElementById(tabId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          YourBrand
        </div>
        <nav className="nav-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <button className="waitlist-header-btn">Join the Waitlist</button>
      </div>
    </header>
  );
}

export default Header;