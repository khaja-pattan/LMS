import { motion } from 'framer-motion';

const PageTemplate = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded-full mt-2" />
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl">🚀</span>
        </div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">
          Welcome to the {title} Page
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
          This module is ready for development. You can now start adding your custom logic for {title.toLowerCase()}.
        </p>
      </div>
    </motion.div>
  );
};

export default PageTemplate;