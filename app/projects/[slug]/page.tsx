import Link from 'next/link';
import ProjectDetails from '@/app/components/ProjectDetails';

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

const projects: Project[] = [
  {
    title: "AI Fitness Coach",
    shortDesc: "Full-stack AI fitness platform with personalized workout plans and progress tracking",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Langchain", "Prompt Engineering"],
    thumbnail: "/thumbnails/OIP.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-fitness-innovation-activity-7297701499726389248-HZGb",
    githubLink: "https://github.com/Ahsan462aggk/fitness-ai-coach",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297701443564662784",
    embedHeight: 999
  },
  {
    title: "Healthcare Knowledge Assistant",
    shortDesc: "Get reliable medical info backed by PubMed research",
    tech: ["PubMed API", "Langgraph", "FastAPI", "Next.js"],
    thumbnail: "/thumbnails/healthcare.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-healthcaretech-langgraph-activity-7301192107921154049-5iAf",
    githubLink: "https://github.com/Ahsan462aggk/healthcare-assistant",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7301191992825323520",
    embedHeight: 800
  },
  {
    title: "AI Expense Tracker Agent",
    shortDesc: "Natural language expense management with AI assistant - add, track, and manage expenses through conversation",
    tech: ["LangGraph", "FastAPI", "React.js"],
    thumbnail: "/thumbnails/expense-tracker.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_expensetracker-ai-fintech-activity-7274863743543521281-Niw3",
    githubLink: "https://github.com/Ahsan462aggk/Expense_Tracker_agent",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7274863681606189059",
    embedHeight: 789
  },
  {
    title: "AI Job Interview Coach",
    shortDesc: "Practice interviews with AI-powered feedback and improvement tips",
    tech: ["LangChain", "FastAPI", "PostgreSQL", "Next.js"],
    thumbnail: "/thumbnails/21e003a6-f6ce-4f9a-b6ad-d09c452bbfff.avif",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-interviewer-application-activity-7297702386733010944-LQVT",
    githubLink: "https://github.com/Ahsan462aggk/AI_powered_Interviewer_Applicatiion",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256680468236886016",
    embedHeight: 684
  },
];

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project based on the slug
  const project = projects.find(
    p => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Project not found</h1>
          <Link 
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetails project={project} />;
} 