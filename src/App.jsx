import React, { useState } from 'react';
import './App.css'
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import { motion, AnimatePresence } from 'motion/react';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';


function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
   const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'overview':
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
        <main>
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
    </div>
  )
}

export default App
