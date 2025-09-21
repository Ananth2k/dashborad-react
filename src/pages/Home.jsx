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
   const activePage =  useSelector((state)=>state.activePage);
   const openNotification =  useSelector((state)=>state.nofificationOpen);


   console.log("menu in store",openNotification)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const renderPage = () => {
        switch (activePage) {
        case 'Default':
            return <Dashboard />;
        case 'Order List':
            return <OrderList />;
        default:
            return <Dashboard />;
        }
    };


  return (
   <div className='flex relative bg-white dark:bg-[#1C1C1C]'>
      {openMenu && <SideBar activeCurrentPage={activePage}/>}
      <div className='w-full'>
        <NavBar />
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
      {openNotification && <Notificatoinbar/>}
      
       
    </div>
  )
}

export default Home