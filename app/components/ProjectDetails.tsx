'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import LinkedInEmbed from './LinkedInEmbed';

interface Project {
  title: string;
  shortDesc: string;
  tech: string[];
  thumbnail: string;
  demoLink: string;
  githubLink: string;
  embedLink?: string;
  embedHeight?: number;
}

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="min-h-screen py-20">
        <div className="space-y-12">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                {project.title}
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mt-2" />
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Project Thumbnail */}
          <div className="relative aspect-video bg-slate-900/50 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-[2px] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Project Links */}
          <div className="flex justify-center">
            <button
              onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <FaGithub className="w-5 h-5" />
              View Code
            </button>
          </div>

          {/* Technology Stack */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h2 className="text-2xl font-semibold text-cyan-400">Technology Stack</h2>
              <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mt-2" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 rounded-full text-cyan-300 hover:bg-slate-800/70 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LinkedIn Embed */}
          {project.embedLink && project.embedHeight && (
            <div className="mt-12 bg-slate-900/30 rounded-2xl p-6 backdrop-blur-sm border border-slate-700/50">
              <LinkedInEmbed
                embedLink={project.embedLink}
                embedHeight={project.embedHeight}
                title={project.title}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 