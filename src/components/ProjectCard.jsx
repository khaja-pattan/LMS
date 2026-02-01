import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Spring configuration for that "snappy yet smooth" feel
  const springConfig = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={springConfig}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 bg-slate-200/10 dark:bg-slate-900/40 backdrop-blur-xl transition-colors hover:border-blue-500/40"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          <Code2 size={24} />
        </div>
        <div className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {project.status}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
        {project.tech}
      </p>

      <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-between items-center">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{project.date}</span>
        <div className="text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;