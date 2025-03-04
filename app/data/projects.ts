export interface Project {
  title: string;
  shortDesc: string;
  tech: string[];
  thumbnail: string;
  demoLink: string;
  githubLink: string;
  embedLink?: string;
  embedHeight?: number;
}

export const projects: Project[] = [
  {
    title: "AI Fitness Coach",
    shortDesc: "Full-stack AI fitness platform with personalized workout plans and progress tracking",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Langchain", "Prompt Engineering"],
    thumbnail: "/thumbnails/OIP.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-fitness-innovation-activity-7297701499726389248-HZGb",
    githubLink: "https://github.com/Ahsan462aggk/fitness-ai-coach",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7297701443564662784",
    embedHeight: 800
  },
  {
    title: "Healthcare Knowledge Assistant",
    shortDesc: "Get reliable medical info backed by PubMed research",
    tech: ["PubMed API", "Langgraph", "FastAPI", "Next.js"],
    thumbnail: "/thumbnails/healthcare.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-healthcaretech-langgraph-activity-7301192107921154049-5iAf",
    githubLink: "https://github.com/Ahsan462aggk/healthcare-assistant",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7301191992825323520",
    embedHeight: 700
  },
  {
    title: "AI Expense Tracker Agent",
    shortDesc: "Natural language expense management with AI assistant - add, track, and manage expenses through conversation",
    tech: ["LangGraph", "FastAPI", "React.js"],
    thumbnail: "/thumbnails/expense-tracker.jpg",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_expensetracker-ai-fintech-activity-7274863743543521281-Niw3",
    githubLink: "https://github.com/Ahsan462aggk/Expense_Tracker_agent",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7274863681606189059",
    embedHeight: 700
  },
  {
    title: "AI Job Interview Coach",
    shortDesc: "Practice interviews with AI-powered feedback and improvement tips",
    tech: ["LangChain", "FastAPI", "PostgreSQL", "Next.js"],
    thumbnail: "/thumbnails/21e003a6-f6ce-4f9a-b6ad-d09c452bbfff.avif",
    demoLink: "https://www.linkedin.com/posts/typescriptahsan_ai-interviewer-application-activity-7297702386733010944-LQVT",
    githubLink: "https://github.com/Ahsan462aggk/AI_powered_Interviewer_Applicatiion",
    embedLink: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256680468236886016",
    embedHeight: 700
  },
]; 