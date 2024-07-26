import React from 'react';
import PropTypes from 'prop-types';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function PostCard({ $id, title, featuredImage, userName, content }) {
  // Function to strip HTML tags
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <Link to={`/post/${$id}`} className="block transform transition-transform duration-200 hover:scale-105">
      <div className='relative rounded-xl overflow-hidden shadow-lg bg-white group'>
        <img 
          src={appwriteService.getFilePreview(featuredImage)} 
          alt={`Image for ${title}`} 
          className='object-cover w-full h-60 sm:h-72 md:h-80 lg:h-96 xl:h-96' 
          onError={(e) => { e.target.onerror = null; e.target.src = 'defaultImage.jpg'; }} // Fallback image
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>
        <div className='absolute top-4 left-4 flex items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-white bg-opacity-80 text-black px-2 py-1 rounded-md shadow-md'>
          <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" />
          <p className='font-semibold'>{userName}</p>
        </div>
        <div className='absolute inset-0 flex flex-col justify-end p-4'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white bg-black bg-opacity-60 px-2 py-1 rounded'>
            {title}
          </h2>
        </div>
        <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-0 group-hover:bg-opacity-90 p-4 rounded-t-xl transition-all duration-300 transform translate-y-full group-hover:translate-y-0'>
          <div className='mb-2'>
            <h3 className='text-lg font-semibold text-gray-800'>Description:</h3>
          </div>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800'>
            {content ? stripHtmlTags(content) : 'No additional information available.'}
          </p>
        </div>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  content: PropTypes.string,
};

PostCard.defaultProps = {
  content: '',
};

export default PostCard;
