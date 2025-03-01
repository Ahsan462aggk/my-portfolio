import { SiNextdotjs, SiFastapi, SiLangchain, SiDocker } from 'react-icons/si';

const icons = {
  nextjs: SiNextdotjs,
  fastapi: SiFastapi,
  langchain: SiLangchain,
  docker: SiDocker,
};

export default function SkillCard({ title, icon }: { title: string; icon: keyof typeof icons }) {
  const Icon = icons[icon];
  return (
    <div className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all">
      <Icon className="text-4xl mx-auto mb-4 text-cyan-400" />
      <h3 className="text-lg">{title}</h3>
    </div>
  );
}