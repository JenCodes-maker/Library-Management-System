import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaUsers,
  FaChartBar,
  FaCog,
  FaExchangeAlt,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-950 text-white h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        📚 Library
      </h1>

      <ul className="space-y-4">
  <li>
    <NavLink
      to="/"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
    >
      <FaHome />
      Dashboard
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/books"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
    >
      <FaBook />
      Books
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/members"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
    >
      <FaUsers />
      Members
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/issue-return"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
    >
      <FaExchangeAlt />
      Issue / Return
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/analytics"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
    >
      <FaChartBar />
      Analytics
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/settings"
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
    >
      <FaCog />
      Settings
    </NavLink>
  </li>
</ul>
    </div>
  );
};

export default Sidebar;