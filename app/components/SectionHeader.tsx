'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 100 
        }}
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p 
          className="text-xl text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100 
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
} 