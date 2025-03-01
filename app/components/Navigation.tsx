// Add this to your main page.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-800/80 backdrop-blur-md shadow-lg shadow-slate-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <motion.div 
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className="relative px-6 py-2 mx-1 text-slate-300 transition-all rounded-full hover:text-cyan-400 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-slate-700/50 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-slate-700/50 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}