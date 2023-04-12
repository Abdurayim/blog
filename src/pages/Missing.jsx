import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='Missing'>
    <h2>Not Found</h2>
    <p>Sorry, this page does not exist</p>
    <p>
        <Link to='/'>Go to Homepage</Link>
    </p>
    </main>
  )
}

export default Missing