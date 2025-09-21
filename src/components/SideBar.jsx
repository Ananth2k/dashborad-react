import React from "react";
import byewind from "../assets/profile/ByeWind.png"
import {
  LayoutDashboard,  TrendingUp,  FolderOpen,  PlayCircle,  User,  Grid,  List,  Layers,  PieChart,
  BarChart2,  Users,  Settings,  Globe,  MessageCircle,  Menu,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {setMenuState,setActivePage} from "../store/PageSlice"





const dashboardItems = [
  { label: "Default", icon: <LayoutDashboard /> },
  { label: "Order List", icon: <List /> },
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






export default function SideBar({activeCurrentPage}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(activeCurrentPage)

  const handleActive =(label)=>{
    setIsActive(label);
    dispatch(setActivePage(label))
  }

  console.log(activeCurrentPage)



  // For mobile: toggle
  return (
    <>
      {/* Mobile Hamburger */}
     

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
      <div className="bg-white md:border-r bg-white dark:bg-[#1C1C1C] md:border-gray-200 ">

      
      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.aside
            
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", bounce: 0.13 }}
          >

            <div className="fixed md:static z-50 left-0 top-0 w-60 border-r border-gray-200 dark:border-white/10 ps-3 pe-2 py-3">


            {/* Logo/Title */}
            <div className="font-bold text-lg flex items-center gap-2 mb-6">
               <button
        className="visible md:hidden fixed top-2 left-2 z-50 p-2 rounded bg-gray-800 text-white"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle sidebar"
      >
      <Menu/>
      </button>
              <img src={byewind} alt="profile" className="w-[24px] h-[24px] rounded-full object-cover" />
              <span className="text-black dark:text-white font-semibold text-[14px]">ByeWind</span>
            </div>
            {/* Favourites */}
            <div className="text-[14px] text-gray-400 mb-1">Favorites</div>
            <div className="space-y-1 mb-3">
              <div className="pl-6 text-gray-400">Overview</div>
              <div className="pl-6 text-gray-400">Projects</div>
            </div>
            {/* Dashboards */}
            <div className="text-[14px] text-gray-400 mb-1">Dashboards</div>
            <ul className="mb-5">
              {dashboardItems.map((item) => (

             <li
              key={item.label}
              onClick={() => handleActive(item.label)}
              className={
                `flex items-center gap-2 rounded-lg cursor-pointer transition-colors duration-200
                ${isActive === item.label
                  ? "bg-gray-100 text-[14px] text-black font-semibold dark:bg-white/5 dark:text-white"
                  : "text-gray-700 dark:text-white"
                }`
              }
            >
              {/* Left bar */}
              <span
                className={`w-1 rounded-full transition-all duration-200
                  ${isActive === item.label
                    ? "bg-black h-5 dark:bg-[#C6C7F8]"
                    : "bg-transparent h-0"
                  }`}
              />
              <div className="px-4 py-2 flex items-center gap-2">
                <span className="w-5">{item.icon}</span>
                <span className="text-[14px]">{item.label}</span>
              </div>
            </li>



              ))}
            </ul>
            {/* Projects */}
            <div className="text-xs text-gray-400 mb-1">Projects</div>
            <ul className="space-y-0.5">
              {projectItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleActive(item.label)}
                  className={
                  `flex items-center gap-2 text-[14px] rounded-lg cursor-pointer transition-colors duration-200
                  ${isActive === item.label
                  ? "bg-gray-100 text-black font-semibold dark:bg-white/5 dark:text-white"
                  : "text-gray-700 dark:text-white"
                  }`
                  }
                  >
                  {/* Left bar */}
                  <span
                  className={`w-1 rounded-full transition-all duration-200
                  ${isActive === item.label
                  ? "bg-black h-5 dark:bg-[#C6C7F8]"
                  : "bg-transparent h-0"
                  }`}
                  />
                  <div className="px-4 py-2 flex items-center gap-2">
                  <span className="w-5">{item.icon}</span>
                  <span className="text-[14px]">{item.label}</span>
                  </div>
                </li>

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