'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaCode, FaDatabase } from 'react-icons/fa';
import PageTransition from './components/PageTransition';

export default function Home() {
  const typewriterText = "Specializing in autonomous AI systems and intelligent solutions".split("");

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen flex flex-col justify-center items-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
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
                className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <motion.div 
                className="flex items-center justify-center gap-2 mb-8"
              >
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-lg opacity-50" />
                  <FaBrain className="w-8 h-8 text-cyan-400 relative z-10" />
                </motion.div>
                <motion.div
                  className="w-16 h-1 bg-gradient-to-l from-blue-400 to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-slate-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Ahsan Ali Gill
              </motion.h2>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              AI Agentic Engineer
            </motion.h1>

            <div className="h-20 mb-16">
              <motion.p 
                className="text-2xl md:text-3xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {typewriterText.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.02,
                      duration: 0.3
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  title: "Autonomous AI",
                  desc: "Building intelligent agents with LangChain and advanced LLMs",
                  icon: FaRobot
                },
                {
                  title: "AI Integration",
                  desc: "Seamless integration of AI into modern applications",
                  icon: FaBrain
                },
                {
                  title: "Full Stack Development",
                  desc: "Next.js, FastAPI, and modern tech stack",
                  icon: FaCode
                },
                {
                  title: "Data & Systems",
                  desc: "Scalable architecture and data management",
                  icon: FaDatabase
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 bg-cyan-400/10 rounded-lg"
                      >
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg text-slate-300 group-hover:text-slate-200 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="/contact"
                className="relative px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}