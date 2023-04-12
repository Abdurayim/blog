import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  return (
    <article className='post'>
        <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h3>{blog.author}</h3>
            <p className='postDate'>{blog.date}</p>
        </Link>
        <p className='postBody'>
            {(blog.body).length <=25 ?
             blog.body : `${(blog.body).slice(0,25)}...`}
        </p>
    </article>
  )
}

export default Blog