import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'; // Assuming this contains global styles
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to fetch current user data
    const fetchCurrentUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
        // Optionally handle error state or alert the user
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchCurrentUser();
  }, [dispatch]); // Only run once on component mount

  return (
    <div className='min-h-screen flex flex-wrap bg-gray-100'>
      {/* Conditional rendering based on loading state */}
      {loading ? (
        <div className='flex items-center justify-center h-screen w-full'>
          <p className='text-xl text-gray-700'>Loading...</p>
        </div>
      ) : (
        <div className='w-full'>
          <Header />
          <main className='container mx-auto px-4 py-8'>
            {/* Outlet for rendering nested routes */}
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
