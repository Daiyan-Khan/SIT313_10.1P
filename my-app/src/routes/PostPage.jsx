// PostPage.js
import React, { useState } from 'react'; // Importing React and useState for state management
import Article from './Article'; // Importing Article component
import Question from './Question'; // Importing Question component
import Button from '../Button'; // Importing reusable Button component
import PostTypeForm from './PostTypeForm'; // Importing form component to select post type
import { Link } from 'react-router-dom'; // Importing Link for navigation

/**
 * PostPage component.
 * Allows users to choose a post type (Article or Question)
 * and displays the corresponding form.
 */
const PostPage = () => {
  const [postType, setPostType] = useState('question'); // State to track the selected post type

  return (
    <div className="PostPage"> {/* Container for the PostPage */}
      <h1>What would you like to post today?</h1> {/* Heading */}
      <PostTypeForm postType={postType} onChange={setPostType} /> {/* Form for selecting post type */}
      
      {/* Conditional rendering based on postType */}
      {postType === 'article' ? <Article /> : <Question />} 

      <div className='ButtonSection'> {/* Container for buttons */}
        <Button text={'Post'} /> {/* Button to submit the post */}
        <Link to='/'> {/* Link to navigate to home page */}
          <Button text={'Home'} /> {/* Home button */}
        </Link>
      </div>
    </div>
  );
}

export default PostPage;
