'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

export default function ProjectCard({
  title,
  description,
  technologies,
  videoUrl,
}: {
  title: string;
  description: string;
  technologies: string[];
  videoUrl?: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div 
      className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all relative"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {videoUrl && (
          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full"
          >
            <FiPlay className="text-cyan-400" />
            <span className="text-cyan-400">Demo</span>
          </button>
        )}
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-8 right-0 text-white hover:text-cyan-400"
            >
              Close
            </button>
            <video 
              src={videoUrl} 
              controls 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}