import React from 'react';
import { Logo, Container, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className="py-3 shadow-lg bg-gray-800">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4">
              <Link to="/">
                <Logo width="70px" />
              </Link>
            </div>
            <ul className="hidden md:flex space-x-4 items-center">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-4 py-2 text-white bg-gray-700 hover:bg-blue-600 rounded-full transition duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button className="text-white">
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

          {/* Mobile Menu */}
          <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 py-2 px-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                      }}
                      className="block px-4 py-2 text-white hover:bg-blue-600 rounded"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
          </div>

          {/* Logout Button */}
          {authStatus && (
            <div className="ml-auto">
              <LogoutBtn/>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
