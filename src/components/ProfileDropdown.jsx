import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { User, Settings, Users, AlertCircle, HelpCircle, LogOut } from 'lucide-react';

const ProfileDropdown = ({ onLogout }) => { // [1] Accept onLogout prop here
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute right-0 mt-3 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50"
    >
      {/* User Header */}
      <div className="p-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700">
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-lg font-bold text-slate-600 dark:text-slate-300">
          PK
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase">Pattan Khaja</h4>
          <p className="text-xs text-slate-500">pkhajap768@gmail.com</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-4 py-3 flex gap-2 border-b border-slate-100 dark:border-slate-700">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900 text-xs font-bold text-blue-600">
          <div className="w-2 h-2 bg-blue-500 rounded-full"/> 0
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-100 dark:border-red-900 text-xs font-bold text-red-600">
          <div className="w-2 h-2 bg-red-500 rounded-full"/> 0
        </span>
      </div>

      {/* Menu Items */}
      <div className="py-2 border-b border-slate-100 dark:border-slate-700">
        <DropdownLink to="/profile" icon={<User size={18}/>} label="View Profile" />
        <DropdownLink to="/settings" icon={<Settings size={18}/>} label="Edit Profile" />
        <DropdownLink to="/communities" icon={<Users size={18}/>} label="Communities" />
      </div>

      <div className="py-2">
        <DropdownButton icon={<AlertCircle size={18}/>} label="Report an Issue" />
        <DropdownButton icon={<HelpCircle size={18}/>} label="Help (info@logikworks.in)" />
        {/* [2] Connect the onLogout function to the Logout button */}
        <DropdownButton 
          onClick={onLogout} 
          icon={<LogOut size={18}/>} 
          label="Logout" 
          color="text-red-500 font-semibold" 
        />
      </div>
    </motion.div>
  );
};

// Reusable NavLink Component
const DropdownLink = ({ to, icon, label }) => (
  <NavLink 
    to={to} 
    className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
  >
    {icon} {label}
  </NavLink>
);

// Reusable Button Component
const DropdownButton = ({ icon, label, color = "text-slate-600 dark:text-slate-300", onClick }) => (
  <button 
    onClick={onClick} // [3] Make sure the button captures the click event
    className={`w-full flex items-center gap-3 px-4 py-2 text-sm ${color} hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer`}
  >
    {icon} {label}
  </button>
);

export default ProfileDropdown;