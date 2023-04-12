import React, { useContext } from 'react';
import Blog from './Blog';
import { AppContext } from '../App';

const BlogPage = () => {
    const {blogs} = useContext(AppContext);
  return (
    <>
      {blogs.map(blog=>(
        <Blog key={blog.id} blog={blog}/>
      ))}
    </>
  )
}

export default BlogPage