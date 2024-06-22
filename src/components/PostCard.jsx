import React from 'react';
import PropTypes from 'prop-types';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition-transform duration-200 hover:scale-105">
      <div className='w-full bg-white rounded-xl shadow-lg overflow-hidden'>
        <div className='w-full h-56 bg-gray-200 flex items-center justify-center'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={`Image for ${title}`} 
            className='w-full h-full object-cover' 
            onError={(e) => { e.target.onerror = null; e.target.src = 'defaultImage.jpg'; }} // Fallback image
          />
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
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
