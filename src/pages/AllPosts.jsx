import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when component mounts
    appwriteService.getPosts().then((response) => {
      if (response) {
        setPosts(response.documents);
      }
    });
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
