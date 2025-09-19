import React from 'react'
import { motion, AnimatePresence } from "motion/react";
import bug from '../assets/notification-icons/BugBeetle.svg'
import profile from '../assets/notification-icons/profile.svg'
import hotspot from '../assets/notification-icons/hotspot.svg'
import contact1 from '../assets/contacts/contact-1.png'

import { Bug, UploadCloud, RefreshCw } from "lucide-react";
function Notificatoinbar() {


const notifications = [
    {icon:bug, title:"You have a bug that needs to be fixed.", time:"just now"},
    {icon:profile, title:"New user registered.", time:"59 minutes ago"},
    {icon:bug, title:"You have a bug that needs to be fixed.", time:"12 hours ago"},
    {icon:hotspot, title:"Andi Lane subscribed to you", time:"Today, 11:59 AM"}
]

const feed = [
  {
    icon: <Bug className="w-8 h-8 rounded-full bg-green-200 text-green-700 p-1" />,
    message: "You have a bug that needs...",
    time: "Just now"
  },
  {
    icon: <RefreshCw className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 p-1" />,
    message: "Released a new version",
    time: "59 minutes ago"
  },
  {
    icon: <UploadCloud className="w-8 h-8 rounded-full bg-blue-200 text-blue-700 p-1" />,
    message: "Submitted a bug",
    time: "12 hours ago"
  }
];

const contacts = [
{profile: contact1,name: "Natali Craig"},
{profile: contact1,name: "Drew Cano"},
{profile: contact1,name: "Orlando Diggs"},
{profile: contact1,name: "Andi Lane"},
{profile: contact1,name: "Kate Morrison"},
{profile: contact1,name: "Koray Okumus"},


]


  return (
    <div className='border-l border-gray-200 w-130'>
        
        <div>        
            <div className='p-3'>
                <h2 className='font-semibold text-sm'>Notifications</h2>
            </div>
            <div className='p-3'>
                <AnimatePresence>                
                <ul className='space-y-2'>
                    {
                    notifications.map((notification,id)=>(
                        <motion.li 
                        key={id} 
                        initial={{opacity:0,translateY:24}}
                        animate={{opacity:1, translateY:0}}
                        exit={{opacity:1, translateY:24}}
                        transition={{duration:0.4, delay: notification.id* 0.08}}
                        className='flex items-start gap-3'>
                        <img src={notification.icon} alt="" className='p-2 bg-blue-100 rounded-xl w-8 h-8'/>
                            <div>
                                <h3 className='overflow-hidden truncate w-50 text-ellipsis text-md font-normal'>{notification.title}</h3>
                                <span className='text-sm text-black/40'>{notification.time}</span>
                            </div>
                        </motion.li>

                    )) 
                    }
                
                </ul>
                </AnimatePresence>
            </div>

        </div>
        <div>
             <div className='p-3'>
                <h2 className='font-semibold text-sm'>Activities</h2>
            </div>        
            <div className="p-4 max-w-sm mx-auto flex flex-col gap-4">
                <AnimatePresence>
                    {feed.map((item, idx) => (
                    <motion.div
                        key={item.message}
                        initial={{ opacity: 0, translateY: 24 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 24 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="flex items-start gap-3 relative"
                    >
                    
                        <div className="flex flex-col items-center">
                        <span>{item.icon}</span>
                        {idx < feed.length - 1 && (
                            <span className="w-0.5 h-3 mt-1 bg-gray-300 mx-auto"></span>
                        )}
                        </div>
                        <div>
                            <h3 className='overflow-hidden truncate w-50 text-ellipsis text-md font-normal'>{item.message}</h3>
                            <span className='text-sm text-black/40'>{item.time}</span>
                        </div>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
        <div>
             <div className='p-3'>
                <h2 className='font-semibold text-sm'>Activities</h2>
            </div>        
            <div className="p-4 max-w-sm mx-auto flex flex-col gap-4">
                <AnimatePresence>
                    {contacts.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, translateY: 24 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: 24 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className="flex items-center gap-3 relative"
                    >
                    
                        <div className="flex flex-col items-center">
                        <img src={item.profile} className="w-10 h-10 rounded-full" alt="profile" />
                       
                        </div>
                        <div>
                            <h3 className='overflow-hidden truncate w-50 text-ellipsis text-md font-normal'>{item.name}</h3>
                            <span className='text-sm text-black/40'>{item.time}</span>
                        </div>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    </div>
  )
}

export default Notificatoinbar