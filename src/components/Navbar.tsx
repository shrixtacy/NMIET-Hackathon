'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'MISSION', href: '/mission' },
    { name: 'OBJECTIVES', href: '/details' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'REGISTER', href: 'https://forms.gle/k9WmRjaxUubhgcPH9' },
    { name: 'OUR TEAM', href: '/team' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className={`terminal-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <Terminal className="brand-icon" size={24} />
          <span className="brand-text">
            <span className="brand-main">NMIET</span>
            <span className="brand-sub">HACKATHON_2025</span>
          </span>
        </Link>

        <div className="navbar-menu desktop-menu">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <a
                key={index}
                href={item.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </a>
            ) : item.href.startsWith('http') ? (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </Link>
            )
          ))}
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <a
                key={index}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </a>
            ) : item.href.startsWith('http') ? (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;