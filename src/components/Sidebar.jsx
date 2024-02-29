import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-black text-white">
      <h2 className="text-center py-4">Navigation</h2>
      <ul>
        <li>
          <Link to="/overview" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <span className="mr-2" role="img" aria-label="Overview icon">📊</span>
           Overview
          </Link>
        </li>
        <li>
          <Link to="/transactions" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <span className="mr-2" role="img" aria-label="Transactions icon">💳</span>
           Transactions
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <span className="mr-2" role="img" aria-label="Reports icon">📈</span>
           Reports
          </Link>
        </li>
        <li>
          <Link to="/budgets" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <span className="mr-2" role="img" aria-label="Budgets icon">💰</span>
            Budgets
          </Link>
        </li>
        <li>
          <Link to="/goals" className="block py-2 px-4 hover:bg-black hover:bg-opacity-50 hover:rounded-md">
          <span className="mr-2" role="img" aria-label="Goals icon nav">🎯</span>
           Goals
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

