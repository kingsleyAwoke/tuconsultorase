import React from 'react';
import { Link } from 'react-router-dom';
import { Links } from './Links';
 

const RightContent = ({ maxDisplayed = Infinity }) => {
  return (
    <div className="quick-link">
      <h4 className='primary-btn quick-access-header nowrap'>Los más Populares</h4>
      <ul>
        { Links.slice(0, maxDisplayed).map((link, index) => (
          <li key={index}><Link to={link.url} className='primary-color'>{link.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default RightContent
