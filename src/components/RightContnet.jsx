import React from 'react';
import { Link } from 'react-router-dom';

const RightContent = ({links, maxDisplayed = Infinity }) => {
  return (
    <div className="quick-link">
      <h3 className='primary-btn quick-access-header'>LosmásPopulares</h3>
      <ul>
        { links.slice(0, maxDisplayed).map((link, index) => (
          <li key={index}><Link to={link.url}>{link.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default RightContent
