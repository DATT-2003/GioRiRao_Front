import { Home, History, Settings, Bell, Mail, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `p-4 rounded-lg ${
        isActive ? "bg-rose-400 text-white" : "text-gray-400 hover:bg-gray-800"
      }`
    }
  >
    <Icon size={24} />
  </NavLink>
);

export const Navigation = () => (
  <nav className="w-20 bg-gray-900 p-4 flex flex-col items-center gap-6">
    <div className="mb-8">
      <img
        src="/api/placeholder/40/40"
        alt="Logo"
        className="w-10 h-10 rounded-lg"
      />
    </div>
    <NavItem to="/" Icon={Home} />
    <NavItem to="/history" Icon={History} />
    <NavItem to="/messages" Icon={Mail} />
    <NavItem to="/notifications" Icon={Bell} />
    <NavItem to="/settings" Icon={Settings} />
    <div className="mt-auto">
      <NavItem to="/logout" Icon={LogOut} />
    </div>
  </nav>
);
