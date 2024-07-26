import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { useState } from 'react';



function LogoutBtn() {
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        // Log out the current session
        await authService.logout();

        // Dispatch the logout action to update Redux state
        dispatch(logout());
      } catch (error) {
        console.error('Logout failed:', error);
      } finally {
        setLoading(false);
      }
    }, 1000); // 1-second delay
  };

  if (!userData) {
    return null; // Hide button if no user data
  }

  return (
    <button
      className={`flex items-center px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-full transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={logoutHandler}
      disabled={loading}
    >
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="4"></circle>
          <path d="M4 12a8 8 0 018-8" strokeWidth="4"></path>
        </svg>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m8-4v4m0 0l-4-4m4 4l4-4"
            />
          </svg>
          <span>{userData.name}</span>
        </>
      )}
    </button>
  );
}

export default LogoutBtn;
