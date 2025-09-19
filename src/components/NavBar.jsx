import {
  LayoutDashboard,
  Star,
  Sun,
  Eye,
  Bell,
  Monitor,
  Search
} from "lucide-react";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white flex items-center justify-between px-4 py-2">
      {/* Left: Dashboard/Menu/Breadcrumb */}
      <div className="flex items-center gap-3 min-w-0">
        <LayoutDashboard className="w-6 h-6 text-gray-900" />
        <Star className="w-5 h-5 text-gray-400" />
        <span className="text-gray-400 text-sm font-medium whitespace-nowrap">Dashboards</span>
        <span className="mx-2 text-gray-300">/</span>
        <span className="font-semibold text-gray-900 text-sm truncate">Default</span>
      </div>
      {/* Middle: Search */}
      <div className="hidden sm:flex items-center mx-6 flex-1 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            className="bg-gray-100 rounded-lg px-4 pl-10 py-2 w-full text-sm outline-none transition focus:ring-2 focus:ring-gray-200"
            placeholder="Search"
            style={{ minWidth: 110 }}
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {/* Command key indicator, desktop only */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1 bg-gray-200 text-[11px] rounded text-gray-500 hidden md:block">⌘/</div>
        </div>
      </div>
      {/* Right controls */}
      <div className="flex items-center gap-3">
        <Sun className="w-5 h-5 text-gray-700" />
        <Eye className="w-5 h-5 text-gray-700" />
        <Bell className="w-5 h-5 text-gray-700" />
        <Monitor className="w-5 h-5 text-gray-700" />
        <LayoutDashboard className="w-5 h-5 text-gray-900 sm:hidden" /> {/* Hamburger/dashboard icon for mobile */}
      </div>
    </nav>
  );
}