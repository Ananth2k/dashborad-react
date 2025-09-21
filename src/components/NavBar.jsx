import {
  LayoutDashboard,
  Star,
  Sun,
  Eye,
  Bell,
  Monitor,
  Search,
  History,Menu

} from "lucide-react";
import sidebaricon from "../assets/sidebaricon.svg"
import {setMenuState,setNotification} from "../store/PageSlice"
import timer  from "../assets/timer.svg"
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";


export default function NavBar() {
  const dispatch = useDispatch();

  const openMenu =  useSelector((state)=>state.menuOpen);
   const activePage =  useSelector((state)=>state.activePage);

  // console.log("nav",isActive)

   
  
  const [menuOpen, setOpenMenu] = useState(true);
  const [notifyOpen, setNotifyOpen]  = useState(true);

const handleMenu = () => {
  setOpenMenu(prev => {
    const newState = !prev;
    dispatch(setMenuState(newState));
    return newState;
  });
};

const handleNotication = () => {
  setNotifyOpen(prev => {
    const newState = !prev;
    dispatch(setNotification(newState));
    return newState;
  });
};

  
     const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
      };
// console.log("menu in nav",menuOpen)

  return (
    <nav className="w-full border-b border-gray-200 bg-white dark:bg-[#1C1C1C] flex items-center justify-between px-4 py-2">
      {/* Left: Dashboard/Menu/Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <Menu className="w-5 cursor-pointer h-5 text-black dark:text-white" onClick={handleMenu} />  
        <Star className="w-5 cursor-pointer h-5 none md:block   text-black dark:text-white" />
        <span className="text-gray-400 text-sm none md:block font-medium whitespace-nowrap">Dashboards</span>
        <span className="mx-2 text-gray-300 none md:block">/</span>
        <span className="font-semibold text-black dark:text-white text-sm truncate">{activePage}</span>
      </div>     
      {/* Right controls */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center mx-6 flex-1 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            className="bg-gray-100 dark:bg-white/10 rounded-lg px-4 pl-10 py-2 w-full text-sm outline-none transition focus:ring-2 focus:ring-gray-200 text-black dark:text-white placeholder-black dark:placeholder-white"
            placeholder="Search"
            style={{ minWidth: 110 }}
          />

          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {/* Command key indicator, desktop only */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1 bg-gray-200 dark:bg-white/20 text-[11px] rounded text-gray-500 dark:text-white hidden md:block">⌘/</div>
        </div>
      </div>
        <Sun className="cursor-pointer w-5 h-5 text-black dark:text-white"  onClick={toggleDarkMode} />
        <History className="cursor-pointer w-5 h-5 text-black dark:text-white"/>
        <Bell className="cursor-pointer w-5 h-5 text-black dark:text-white" onClick={handleNotication}/>
        <Menu className="cursor-pointer w-5 h-5 text-black dark:text-white" onClick={handleNotication}/>      
      </div>
    </nav>
  );
}