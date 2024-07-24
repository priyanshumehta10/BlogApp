import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  if (!userData) {
    // Handle the case where userData is not yet available
    return null; // Or you can return a loading indicator
  }

  return (
    <button
      className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandler}
    >
      {userData.name}
    </button>
  );
}

export default LogoutBtn;
