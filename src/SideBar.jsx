// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ data }) => {
  const location = useLocation();

  return (
    <div className="bg-gray-400 min-h-screen  top-0   p-4">
      {data.map((section) => (
        <div key={section._id}>
          <h2 className="text-xl text-white font-bold mb-2">{section.name}</h2>
          <ul>
            {section.checks.map((page) => (
              <li key={page._id} className="mb-2">
                <Link
                  to={`/${section.name.toLowerCase()}/${page.tcode}`}
                  className={`${
                    location.pathname ===
                    `/${section.name.toLowerCase()}/${page.tcode}`
                      ? 'text-blue-500'
                      : ''
                  }`}
                >
                  <h1 className='text-xs'>{page.name}</h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
};

export default Sidebar;
