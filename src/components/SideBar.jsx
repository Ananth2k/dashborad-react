import React from "react";

import {
  LayoutDashboard,
  TrendingUp,
  FolderOpen,
  PlayCircle,
  User,
  Grid,
  List,
  Layers,
  PieChart,
  BarChart2,
  Users,
  Settings,
  Globe,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const dashboardItems = [
  { label: "Default", icon: <LayoutDashboard /> },
  { label: "Ordder List", icon: <List /> },
  { label: "Performance", icon: <TrendingUp /> },
  { label: "Online Courses", icon: <PlayCircle /> }
];

const projectItems = [
  { label: "User Profile", icon: <User /> },
  { label: "Overview", icon: <Grid /> },
  { label: "Projects", icon: <Layers /> },
  { label: "Campaigns", icon: <PieChart /> },
  { label: "Documents", icon: <BarChart2 /> },
  { label: "Followers", icon: <Users /> },
  { label: "Account", icon: <Settings /> },
  { label: "Corporate", icon: <Globe /> },
  { label: "Blog", icon: <FolderOpen /> },
  { label: "Social", icon: <MessageCircle /> }
];






export default function SideBar() {
  const [open, setOpen] = useState(false);

  const [isActive, setIsActive] = useState("Default")

const handleActive =(label)=>{
  setIsActive(label);
}


  // For mobile: toggle
  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-2 left-2 z-50 p-2 rounded bg-gray-800 text-white"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle sidebar"
      >
        <LayoutDashboard />
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className="bg-white border-r bg-white dark:bg-[#1C1C1C] border-gray-200">

      
      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.aside
            
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", bounce: 0.13 }}
          >

            <div className="fixed md:static z-50 left-0 top-0 w-60 bg-white border-r border-gray-200 ps-3 pe-2 py-3">


            {/* Logo/Title */}
            <div className="font-bold text-lg flex items-center gap-2 mb-6">
              <LayoutDashboard className="text-gray-900" /> 
              <span className="text-gray-600">TwiWind</span>
            </div>
            {/* Favourites */}
            <div className="text-xs text-gray-400 mb-1">Favorites</div>
            <div className="space-y-1 mb-3">
              <div className="pl-6 text-gray-400">Overview</div>
              <div className="pl-6 text-gray-400">Projects</div>
            </div>
            {/* Dashboards */}
            <div className="text-xs text-gray-400 mb-1">Dashboards</div>
            <ul className="mb-5">
              {dashboardItems.map((item) => (
                               <motion.li
                  key={item.label}
                  onClick={() => handleActive(item.label)}
                  whileHover={{ scale: 1.02 }} // small grow on hover
                  whileTap={{ scale: 0.98 }}   // small shrink on click
                  animate={{
                    backgroundColor: isActive === item.label ? "#f3f4f6" : "transparent", // gray-100
                    color: isActive === item.label ? "#000" : "#374151", // text-black vs text-gray-700
                    fontWeight: isActive === item.label ? 600 : 400
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 rounded-lg cursor-pointer"
                >
                  {/* Left indicator bar */}
                  <motion.span
                    layout
                    animate={{
                      backgroundColor: isActive === item.label ? "#1C1C1C" : "transparent",
                      height: isActive === item.label ? "20px" : "0px",
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-1 rounded-full"
                  />
                  
                  <div className="px-4 py-2 flex items-center gap-2">
                    <span className="w-5">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </motion.li>

              ))}
            </ul>
            {/* Projects */}
            <div className="text-xs text-gray-400 mb-1">Projects</div>
            <ul className="space-y-0.5">
              {projectItems.map((item) => (
                <motion.li
                  key={item.label}
                  onClick={() => handleActive(item.label)}
                  whileHover={{ scale: 1.02 }} // small grow on hover
                  whileTap={{ scale: 0.98 }}   // small shrink on click
                  animate={{
                    backgroundColor: isActive === item.label ? "#f3f4f6" : "transparent", // gray-100
                    color: isActive === item.label ? "#000" : "#374151", // text-black vs text-gray-700
                    fontWeight: isActive === item.label ? 600 : 400
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 rounded-lg cursor-pointer"
                >
                  {/* Left indicator bar */}
                  <motion.span
                    layout
                    animate={{
                      backgroundColor: isActive === item.label ? "#1C1C1C" : "transparent",
                      height: isActive === item.label ? "20px" : "0px",
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-1 rounded-full"
                  />
                  
                  <div className="px-4 py-2 flex items-center gap-2">
                    <span className="w-5">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </motion.li>
              ))}
            </ul>

            </div>



          </motion.aside>
        )}
      </AnimatePresence>
      </div>
    </>
  );
}