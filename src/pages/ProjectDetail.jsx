import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, ShieldCheck, Database, Layout } from 'lucide-react';
import { projectData } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(p => p.id === Number(id));

  if (!project) return <div className="p-20 text-center dark:text-white">Content Not Found</div>;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-5xl mx-auto py-10 px-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 font-bold">
        <ArrowLeft size={20} /> Back to Hub
      </button>

      <div className="relative h-[450px] rounded-[48px] overflow-hidden mb-12 shadow-2xl group">
        <img src={project.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">{project.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">{project.desc}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Feature icon={<Database className="text-blue-500"/>} title="Architecture" text="Clean modular design for scalability." />
             <Feature icon={<ShieldCheck className="text-emerald-500"/>} title="Security" text="Stateless auth with encrypted payloads." />
          </div>
        </div>
        <div className="p-8 rounded-[32px] bg-slate-200/20 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 h-fit">
          <h4 className="font-bold dark:text-white mb-6">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.split(',').map((t, i) => (
              <span key={i} className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold">{t.trim()}</span>
            ))}
          </div>
          <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">Enroll Now</button>
        </div>
      </div>
    </motion.div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="p-6 rounded-[24px] bg-slate-200/10 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800">
    <div className="mb-4">{icon}</div>
    <h4 className="font-bold dark:text-white mb-1">{title}</h4>
    <p className="text-sm text-slate-500">{text}</p>
  </div>
);

export default ProjectDetail;