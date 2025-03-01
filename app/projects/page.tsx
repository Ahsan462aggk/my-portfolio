'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { FaPlay, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Project {
  title: string;
  shortDesc: string;
  tech: string[];
  thumbnail: string;
  demoLink: string;
  githubLink: string;
}

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects: Project[] = [
    {
      title: "AI Fitness Coach",
      shortDesc: "Full-stack AI fitness platform with personalized workout plans and progress tracking",
      tech: ["Next.js", "FastAPI", "PostgreSQL", "Langchain", "Prompt Engineering"],
      thumbnail: "/thumbnails/OIP.jfif",
      demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-fitness-innovation-activity-7297701499726389248-HZGb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaHRmUBub4w0ueEhEOf8zYL6o52PFlFMvg",
      githubLink: "https://github.com/Ahsan462aggk/fitness-ai-coach"
    },{
      title: "Healthcare Knowledge Assistant",
      shortDesc: "Get reliable medical info backed by PubMed research",
      tech: ["PubMed API", "Langgraph", "FastAPI", "Next.js"],
      thumbnail: "/thumbnails/healthcare.jfif",
      demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-healthcaretech-langgraph-activity-7301192107921154049-5iAf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaHRmUBub4w0ueEhEOf8zYL6o52PFlFMvg",
      githubLink: "https://github.com/Ahsan462aggk/healthcare-assistant"
    },
  
    {
      title: "AI Expense Tracker Agent",
      shortDesc: "Natural language expense management with AI assistant - add, track, and manage expenses through conversation",
      tech: ["LangGraph", "FastAPI", "React.js"],
      thumbnail: "/thumbnails/expense-tracker.jpg",
      demoLink: "https://www.linkedin.com/posts/typescriptahsan_expensetracker-ai-fintech-activity-7274863743543521281-Niw3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaHRmUBub4w0ueEhEOf8zYL6o52PFlFMvg",
      githubLink: "https://github.com/Ahsan462aggk/Expense_Tracker_agent"
    },
    {
      title: "AI Job Interview Coach",
      shortDesc: "Practice interviews with AI-powered feedback and improvement tips",
      tech: ["LangChain", "FastAPI", "PostgreSQL", "Next.js"],
      thumbnail: "/thumbnails/21e003a6-f6ce-4f9a-b6ad-d09c452bbfff.avif",
      demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-interviewer-application-activity-7297702386733010944-LQVT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaHRmUBub4w0ueEhEOf8zYL6o52PFlFMvg",
      githubLink: "https://github.com/Ahsan462aggk/AI_powered_Interviewer_Applicatiion"
    },
  ];

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left z-50"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                Featured Projects
              </motion.h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/50 transition-all"
                >
                  {/* Project Thumbnail */}
                  <div className="relative aspect-video bg-slate-900/50 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-[2px] z-10" />
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center z-20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.demoLink !== "#" && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 rounded-full bg-cyan-400/20 text-cyan-400 backdrop-blur-sm hover:bg-cyan-400/30"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <FaPlay className="w-6 h-6" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <motion.h2 
                        className="text-xl font-semibold text-cyan-400"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h2>
                      {project.githubLink !== "#" && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                    
                    <p className="text-slate-300 mb-4 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.1 + techIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.2 }
                          }}
                          className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-cyan-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}