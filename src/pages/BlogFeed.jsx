import React, { useContext } from 'react';
import {useParams,Link} from "react-router-dom";
import { AppContext } from '../App';

const BlogFeed = () => {
    const {blogs,handleDelete} = useContext(AppContext);
    const {id} = useParams();
    const blog = blogs.find(blog=>(blog.id).toString()=== id);
  return (
    <main className='PostPage'>
        <article className='post'>
            {blog && 
            <>
                <h2>{blog.title}</h2>
                <p className='postDate'>{blog.date}</p>
                <p className='postDate'>{blog.author}</p>
                <p className='postBody'>{blog.body}</p>
                <buttun className="buttonred" onClick={()=>handleDelete(blog.id)}>
                    Delete
                </buttun>
            </>
            }
            {!blog &&
            <>
            <h2>Blogs not Found</h2>
            <p>Well, it's sad</p>
            <p>
                <Link to='/'>
                    Visit our HomePage
                </Link>
            </p>
            </>}
        </article>
    </main>
  )
}

export default BlogFeed