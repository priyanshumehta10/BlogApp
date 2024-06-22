import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className='py-8'>
      <Container>
        <div className='max-w-3xl mx-auto px-4'>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
