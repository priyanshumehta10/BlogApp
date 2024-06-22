import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch post data when component mounts
    const fetchPost = async () => {
      try {
        const fetchedPost = await appwriteService.getPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        // Optionally handle error state or alert the user
        navigate('/');
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, navigate]);

  return post ? (
    <div className='py-8'>
      <Container>
        <div className='max-w-3xl mx-auto px-4'>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null;
}

export default EditPost;
