import { useState } from "react";
import {
  Plus,
  Filter,
  ArrowUpDown,
  Calendar,
  MoreVertical,
  Circle,
  Search, ChevronLeft,ChevronRight
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

// Sample data
const initialData = [
    {
    orderId: "#CM9801",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress"
  },
  {
    orderId: "#CM9802",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete"
  },

  {
    orderId: "#CM9803",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending"
  },
  {
    orderId: "#CM9804",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved"
  },
  {
    orderId: "#CM9805",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected"
  },
];

const statusColors = {
  "In Progress": "text-purple-500",
  Complete: "text-green-500",
  Pending: "text-blue-400",
  Approved: "text-yellow-400",
  Rejected: "text-black dark:text-white"
};

export default function OrderList() {
  
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const filtered = initialData.filter(
    (d) =>
      d.user.toLowerCase().includes(filter.toLowerCase()) ||
      d.project.toLowerCase().includes(filter.toLowerCase()) ||
      d.orderId.toLowerCase().includes(filter.toLowerCase()) ||
      d.status.toLowerCase().includes(filter.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="w-full p-3 bg-white dark:bg-[#1C1C1C] mx-auto overflow-hidden">
      {/* Top Controls */}
      <div className="flex my-2 mx-3 items-center justify-between rounded-lg py-2 px-2 gap-2 flex-wrap bg-[#F7F9FB] dark:bg-white/5">
        <div className="flex gap-2 px-4 items-center">
          <button className="p-2 rounded hover:bg-blue-700">
            <Plus size={18} className="dark:stroke-white"/>
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <Filter size={18} className="dark:stroke-white"/>
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <ArrowUpDown size={18} className="dark:stroke-white"/>
          </button>
        </div>
        <div className="bg-white/20 rounded-xl border border-black/20 px-4 py-2 flex gap-2 text-black/20
        ">
          <Search className="dark:stroke-white"/>
           <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
          className="rounded-lg w-full text-sm outline-none transition focus:ring-2 focus:ring-gray-200 text-black dark:text-white placeholder-black dark:placeholder-white"
        />

        </div>
        
       
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y text-[12px] divide-gray-200">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="m-2" />
              </th>
              <th className="text-left p-3 text-gray-500 font-semibold">Order ID</th>
              <th className="text-left p-3 text-gray-500 font-semibold">User</th>
              <th className="text-left p-3 text-gray-500 font-semibold">Project</th>
              <th className="text-left p-3 text-gray-500 font-semibold">Address</th>
              <th className="text-left p-3 text-gray-500 font-semibold">Date</th>
              <th className="text-left p-3 text-gray-500 font-semibold">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {paginated.length === 0 && (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td colSpan={8} className="p-10 text-center text-[12px] text-black dark:text-white font-semibold">
                    No Results
                  </td>
                </motion.tr>
              )}
              {paginated.map((row, idx) => (
                <motion.tr
                  key={row.orderId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className="hover:bg-gray-50 dark:hover:bg-white/10  transition text-black dark:text-white"
                >
                  <td>
                    <input type="checkbox" className="m-2" />
                  </td>
                  <td className="p-3">{row.orderId}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2 text-black dark:text-white">
                      <img
                        src={row.avatar}
                        alt={row.user}
                        className="w-[24px] h-[24px] rounded-full object-cover"
                      />
                      <span>{row.user}</span>
                    </div>
                  </td>
                  <td className="p-3">{row.project}</td>
                  <td className="p-3">{row.address}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-1 text-black dark:text-white">
                      <Calendar size={16} />
                      <span>{row.date}</span>
                    </div>
                  </td>
                  <td className={`p-3 flex items-center gap-2 ${statusColors[row.status]} font-medium`}>
                    <Circle size={14} fill="currentColor" strokeWidth={0} />
                    <span>{row.status}</span>
                  </td>
                  <td className="p-3">
                    <button className="p-2 rounded hover:bg-gray-200">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      
<div className="flex justify-end p-4">
  <nav className="inline-flex rounded-md -space-x-px" aria-label="Pagination">
    <button
      onClick={() => setPage(page > 1 ? page - 1 : 1)}
      className="border-0 text-black dark:text-white px-3 py-1 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg flex items-center"
    >
      <ChevronLeft size={20} />
    </button>
    {[...Array(Math.ceil(filtered.length / rowsPerPage)).keys()].map((p) => (
      <button
        key={p}
        onClick={() => setPage(p + 1)}
        className={`relative inline-flex items-center px-3  rounded-lg py-1 border text-sm font-semibold focus:z-20 ${page === p + 1
          ? "z-10 bg-black/5 border-0 dark:bg-white/5 dark:text-white text-black"
          : "border-0 text-black dark:text-white hover:bg-white/5"}`
        }
      >
        {p + 1}
      </button>
    ))}
    <button
      onClick={() => setPage(page < Math.ceil(filtered.length / rowsPerPage) ? page + 1 : page)}
      className="border-0 text-black dark:text-white px-3 py-1 hover:bg-gray-50 dark:hover:bg-white/10 rounded-lg flex items-center"
    >
      <ChevronRight size={20} />
    </button>
  </nav>
</div>

    </div>
  );
}
