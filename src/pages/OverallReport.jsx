import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, Clock, BarChart3, Award } from 'lucide-react';

const OverallReport = () => {
  const stats = [
    { label: "Completed Projects", value: "12", icon: <CheckCircle className="text-emerald-500" />, bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { label: "Active Assessments", value: "04", icon: <Clock className="text-blue-500" />, bg: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "Skill Score", value: "85%", icon: <TrendingUp className="text-purple-500" />, bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Performance Analytics</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Track your growth and project milestones.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm flex items-center gap-5"
          >
            <div className={`p-4 rounded-2xl ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Visualization Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[320px]">
          <BarChart3 size={48} className="text-slate-200 dark:text-slate-700 mb-4" />
          <p className="text-slate-400 font-medium">Monthly Progress Activity</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
            <Award className="text-blue-500" size={20} /> Top Skills
          </h4>
          <div className="space-y-6">
            <SkillProgress skill="Java & Spring Boot" progress="90%" />
            <SkillProgress skill="React & Frontend" progress="75%" />
            <SkillProgress skill="DSA & Logic" progress="60%" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillProgress = ({ skill, progress }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-slate-600 dark:text-slate-400 font-medium">{skill}</span>
      <span className="text-blue-600 font-bold">{progress}</span>
    </div>
    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }} 
        animate={{ width: progress }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-blue-500 h-full rounded-full" 
      />
    </div>
  </div>
);

export default OverallReport;