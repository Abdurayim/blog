import React, { useContext } from 'react'
import { AppContext } from '../App'

const Form = () => {
  const {handleSubmit,blogTitle,setBlogTitle,blogBody,setBlogBody,blogAuthor,setBlogAuthor} = useContext(AppContext);
  return (
    <main className='NewPost'>
      <h2>New Blog</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="blogTitle">Title:</label>
        <input
        id="postTitle"
        type='text'
        required
        value={blogTitle}
        onChange={(e)=>setBlogTitle(e.target.value)}
        />
        <label htmlFor="blogTitle">Author:</label>
        <input
        id=""
        type='text'
        required
        value={blogAuthor}
        onChange={(e)=>setBlogAuthor(e.target.value)}
        />
        <label htmlFor="blogBody">Body:</label>
        <textarea
        id='postBody'
        required
        value={blogBody}
        onChange={(e)=>setBlogBody(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default Form