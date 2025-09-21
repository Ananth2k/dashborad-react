import React, { useState } from 'react';
import Dashboard from './Dashboard';
import OrderList from './OrderList';
import { motion, AnimatePresence } from 'motion/react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Notificatoinbar from '../components/Notificatoinbar';
import {  useSelector } from 'react-redux';

function Home() {
   const openMenu =  useSelector((state)=>state.menuOpen);
   const activePage =  useSelector((state)=>state.menuOpen);

   console.log("menu in store",openMenu)

    const [currentPage, setCurrentPage] = useState('orderlist');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const renderPage = () => {
        switch (currentPage) {
        case 'dashboard':
            return <Dashboard />;
        case 'orderlist':
            return <OrderList />;
        default:
            return <Dashboard />;
        }
    };


  return (
   <div className='flex relative bg-white dark:bg-[#1C1C1C]'>
      {openMenu && <SideBar/>}
      <div className='w-full'>
        <NavBar/>
        <AnimatePresence mode='wait'>
        <main className='bg-white'>
          <motion.div 
          initial={{opacity:0, y:8}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:-8}}
          transition={{duration:0.2, ease: "easeInOut"}}
          className='h-full'
          >
            {renderPage()}
          </motion.div>         
        </main>
        </AnimatePresence>
      </div>
      {/* <Notificatoinbar/> */}
      
       
    </div>
  )
}

export default Home