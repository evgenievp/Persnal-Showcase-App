import React, { useEffect, useState } from 'react';

import Link from 'next/link';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/">
          <span className="font-bold cursor-pointer text-lg">My App</span>
        </Link>

        <div className="flex items-center gap-3 text-sm sm:gap-4 sm:text-base">
          {!isLoggedIn && (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}

          {isLoggedIn && (
            <button
              className="text-red-700 hover:text-red-900"
              onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
