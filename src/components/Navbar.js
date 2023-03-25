import React from 'react';
import { Link } from 'react-router-dom';

import { links, social } from '../data/NavLinks';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>Mike Irlbeck</Link>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li id={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
