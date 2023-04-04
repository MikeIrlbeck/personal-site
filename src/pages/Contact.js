import React from 'react';
import { Link } from 'react-router-dom';
import { social } from '../data/NavLinks';

const Contact = () => {
  return (
    <div className='page-container'>
      <h1 className='page-title'>Contact</h1>
      <h2>General</h2>
      <p>
        If you're looking to chat, you can reach me at the following email:{' '}
        <span className='email'>abcdefake@gmail.com</span>
      </p>
      <h2>Social</h2>
      <ul className='social'>
        {social.map((link) => {
          const { id, url, icon } = link;
          console.log(link);
          return (
            <li key={id}>
              <Link to={url}>{icon}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contact;
