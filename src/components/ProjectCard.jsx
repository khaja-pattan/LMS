import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Coffee, Terminal, Film, Cpu, Globe, Code2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const getTechTheme = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes('java')) return { icon: <Coffee size={20} />, color: 'text-orange-500', bg: 'bg-orange-500/10' };
    if (t.includes('c++')) return { icon: <Terminal size={20} />, color: 'text-blue-400', bg: 'bg-blue-400/10' };
    if (t.includes('cinema')) return { icon: <Film size={20} />, color: 'text-pink-400', bg: 'bg-pink-400/10' };
    if (t.includes('ai')) return { icon: <Cpu size={20} />, color: 'text-purple-400', bg: 'bg-purple-400/10' };
    return { icon: <Globe size={20} />, color: 'text-cyan-400', bg: 'bg-cyan-400/10' };
  };

  const theme = getTechTheme(project.tech);

  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group relative rounded-[32px] border border-slate-200/50 dark:border-slate-800/50 bg-slate-200/10 dark:bg-slate-900/40 backdrop-blur-xl overflow-hidden cursor-pointer shadow-sm"
    >
      <div className="h-44 w-full relative overflow-hidden">
        <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className={`absolute top-4 left-4 p-2.5 rounded-xl backdrop-blur-md ${theme.bg} ${theme.color} border border-white/10`}>
          {theme.icon}
        </div>
      </div>
      <div className="p-7">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
          <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-all" />
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">{project.tech}</p>
        <div className="pt-5 border-t border-slate-200/20 flex justify-between items-center text-xs font-bold">
          <span className="text-blue-600 uppercase tracking-widest">{project.status}</span>
          <span className="text-slate-400">{project.date || "Feb 2026"}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;