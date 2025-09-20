import React, { useState } from 'react';
import Dashboard from './Dashboard';
import OrderList from './OrderList';
import { motion, AnimatePresence } from 'motion/react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Notificatoinbar from '../components/Notificatoinbar';

function Home() {

    const [currentPage, setCurrentPage] = useState('dashboard');
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
   <div className='flex relative'>
      <SideBar/>
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