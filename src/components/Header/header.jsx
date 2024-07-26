import React, { useState } from 'react';
import { Logo, Container, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-4 shadow-lg bg-gray-900 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>

            <ul className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-white"
              onClick={handleMobileMenuToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {authStatus && (
            <div className="hidden md:block ml-auto">
              <LogoutBtn />
            </div>
          )}
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 py-2 px-4 shadow-lg z-50">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMobileMenuOpen(false);
                      }}
                      className="block px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
