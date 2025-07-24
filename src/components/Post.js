import React from 'react';
import { post } from '../data/post';

const Post = () => {
    return (
  <ul>
    {post.map((post) => (
      <li key={post.id}>
        <p>{post.title}</p>
        <img src={post.thumbnailUrl} alt={post.title} />
        <p>{post.content}</p>
      </li>
    ))}
  </ul>
  );
};

export default Post;