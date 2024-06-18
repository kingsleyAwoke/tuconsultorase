import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';


const BreadCrumb = () => {
  // BREADCRUMB
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  return (
    <div className="breadcrumbs container">
      <span>Está aquí: </span>
      <Link to="/" className='primary-color'>Inicio</Link>
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          <FaCaretRight className='warn-color' />
          {index === pathSegments.length - 1 ? <span>{segment}</span>:(
            <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}className='primary-color'>{segment}</Link>
            )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BreadCrumb
