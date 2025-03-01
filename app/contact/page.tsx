'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaRobot } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="flex justify-center items-center gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-lg opacity-50" />
                  <FaRobot className="w-12 h-12 text-cyan-400 relative z-10" />
                </motion.div>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Let's Connect
              </motion.h1>
              <motion.p
                className="text-xl text-slate-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Feel free to reach out through email or connect with me on LinkedIn
              </motion.p>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              className="max-w-2xl mx-auto space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Email */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <a
                  href="mailto:ahs462agk@gmail.com"
                  className="relative flex items-center gap-6 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all"
                >
                  <div className="p-4 bg-cyan-400/10 rounded-lg">
                    <FaEnvelope className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Email Me</h3>
                    <p className="text-lg text-cyan-400">ahs462agk@gmail.com</p>
                  </div>
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <a
                  href="https://www.linkedin.com/in/ahsanaligill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-6 p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all"
                >
                  <div className="p-4 bg-cyan-400/10 rounded-lg">
                    <FaLinkedin className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-200 mb-2">Connect on LinkedIn</h3>
                    <p className="text-lg text-cyan-400">linkedin.com/in/ahsanaligill</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}