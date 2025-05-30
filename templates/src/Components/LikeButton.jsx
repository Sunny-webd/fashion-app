import React from 'react'
import { useState } from 'react';
const LikeButton = ({ postId, initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    // Here you would call your backend API to like the post.
    // For demonstration, we simply increment the local state.
    setLikes(likes + 1);
  };

  return (
    <a href="#" onClick={(e) => { e.preventDefault(); handleLike(); }} className="flex items-center space-x-2">
      <div className="p-2 rounded-full text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="25" height="25">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
        </svg>
        {likes === 0 ? (
          <p>No likes</p>
        ) : likes === 1 ? (
          <p>Liked by 1 person</p>
        ) : (
          <p>Liked by {likes} people</p>
        )}
      </div>
    </a>
  );
}

export default LikeButton
