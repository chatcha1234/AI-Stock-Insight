import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      >
        <span className="ml-3">{children}</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen">
        <div className="flex items-center pl-2.5 mb-5">
          {/* App Logo can go here */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            AI Stock Insight
          </span>
        </div>
        <ul className="space-y-2">
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/stocks">Stocks</NavItem>
          <NavItem to="/news">News & Sentiment</NavItem>
          <NavItem to="/compare">Compare</NavItem>
          <NavItem to="/about">About</NavItem>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
                <Link to="/settings" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="ml-3">Settings</span>
                </Link>
            </li>
        </ul>
      </div>
    </aside>
  );
};

export default Navbar;