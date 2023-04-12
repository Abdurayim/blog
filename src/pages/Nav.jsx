import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from '../App';

const Nav = () => {
    const {search,setSearch} = useContext(AppContext);
  return (
    <nav className='Nav'>
        <form action=""
        className='searchForm'
        onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor='search'>
                    Search Posts
                </label>
                <input
                id="search"
                type="text"
                placeholder='Search from Blog'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />  
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Create Blog</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav