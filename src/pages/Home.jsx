import React,{useContext} from 'react';
import { AppContext } from '../App';
import BlogPage from './BlogPage';

const Home = () => {
  const {blogs} = useContext(AppContext);
  return (
    <main className='Home'>
        {blogs.length ? (
          <BlogPage blogs={blogs}/>
        ) : 
        <p style={{marginTop:"2rem"}}>
           No posts to display
        </p>}
    </main>
  )
}

export default Home