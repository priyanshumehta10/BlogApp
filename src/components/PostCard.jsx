import React from 'react';
import PropTypes from 'prop-types';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage,userName }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition-transform duration-200 hover:scale-105">
      <div className='relative rounded-xl overflow-hidden shadow-lg bg-gray-200'>
        <img 
          src={appwriteService.getFilePreview(featuredImage)} 
          alt={`Image for ${title}`} 
          className='object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-96' 
          onError={(e) => { e.target.onerror = null; e.target.src = 'defaultImage.jpg'; }} // Fallback image
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex items-end p-4'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white'>{title}</h2>
          <p className='text-sm sm:text-xl   text-white'>{userName}</p>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
};

export default PostCard;
