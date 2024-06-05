import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='notFoundContainer'>
      <div className='notFound'>
        <h1 className='notFoundH1'>Oops!</h1>
        <div className="notFoundContent">
          <span>404 Error &ndash; Page Not Found</span>
          <p>Sorry, the page you're looking for doesn't exist. Please go back to Homepage.</p>
          <Link to='/' className='notFoundLink'>Go To Homepage</Link>
        </div>        
      </div>
    </section>
  );
}

export default NotFoundPage
