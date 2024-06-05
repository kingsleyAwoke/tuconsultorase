import { Link } from 'react-router-dom'
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section>

        <FaExclamationTriangle />
      <h1>404 Not Found</h1>
      <p>This Page does not exist</p>

      <Link to='/'>Go back to home page</Link>
    </section>
  );
}

export default NotFoundPage
