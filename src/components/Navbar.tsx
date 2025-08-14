'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove body scroll lock - let page remain responsive

  // Simplified - no click outside handler to avoid interference

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'MISSION', href: '/mission' },
    { name: 'GUIDELINES', href: '/details' },
    { name: 'REGISTER', href: 'https://forms.gle/k9WmRjaxUubhgcPH9' },
    { name: 'OUR TEAM', href: '/team' },
    { name: 'CONTACT', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`terminal-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <Terminal className="brand-icon" size={32} />
          <span className="brand-text">
            <span className="brand-main">NEXTECH 1.0</span>
          </span>
        </Link>

        <div className="navbar-menu desktop-menu">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <a
                key={index}
                href={item.href}
                className="nav-link"
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="nav-link"
                onClick={closeMobileMenu}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </Link>
            )
          ))}
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                <span className="nav-prompt">$</span>
                <span className="nav-command">{item.name}</span>
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
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