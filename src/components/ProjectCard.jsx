import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const statusColors = {
    "Completed": "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
    "In Progress": "text-blue-500 border-blue-500/20 bg-blue-500/5",
    "Review": "text-purple-500 border-purple-500/20 bg-purple-500/5",
    "Pending": "text-amber-500 border-amber-500/20 bg-amber-500/5",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group relative p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all hover:border-blue-500/50 shadow-sm"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl">
          <Code2 size={24} />
        </div>
        <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-lg border ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
        {project.tech}
      </p>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <div>
          <p className="text-[10px] uppercase tracking-tighter text-slate-400 mb-1">Deadline</p>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{project.date}</p>
        </div>
        <motion.div whileHover={{ x: 3, y: -3 }} className="text-blue-600">
          <ArrowUpRight size={24} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;