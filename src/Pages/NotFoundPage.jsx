import { Link } from 'react-router-dom'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
  return (
    <section>

        <faExclamationTriangle />
      <h1>404 Not Found</h1>
      <p>This Page does not exist</p>

      <Link to='/'>Go back to home page</Link>
    </section>
  );
}

export default NotFoundPage
