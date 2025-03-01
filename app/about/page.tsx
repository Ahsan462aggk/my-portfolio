'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBrain, FaRobot, FaCode, FaServer } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

export default function About() {
  const experiences = [
    {
      year: "2024",
      title: "AI Engineer",
      company: "Freelance",
      description: "Developing cutting-edge AI solutions using LangChain and LangGraph"
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Various Projects",
      description: "Building modern web applications with Next.js and FastAPI"
    }
  ];

  const skills = [
    { name: "AI & ML", progress: 90, icon: FaBrain },
    { name: "Full Stack", progress: 85, icon: FaCode },
    { name: "Cloud & DevOps", progress: 80, icon: FaServer },
    { name: "LLM Integration", progress: 95, icon: FaRobot }
  ];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
              className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.h1
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Passionate AI Engineer specializing in building intelligent solutions that bridge the gap between cutting-edge AI technology and real-world applications.
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-cyan-400/10 rounded-lg"
                      >
                        <skill.icon className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-cyan-400">{skill.name}</h3>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-cyan-400">{exp.year}</span>
                        <h3 className="text-xl font-semibold text-slate-200">{exp.title}</h3>
                      </div>
                      <p className="text-cyan-400/80 mb-2">{exp.company}</p>
                      <p className="text-slate-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-6 h-6 text-cyan-400" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-6 h-6 text-cyan-400" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}