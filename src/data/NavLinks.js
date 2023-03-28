import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const links = [
  {
    id: 'home',
    url: '/',
    text: 'home',
  },
  {
    id: 'about',
    url: '/about',
    text: 'about',
  },
  {
    id: 'projects',
    url: '/projects',
    text: 'projects',
  },
  {
    id: 'contact',
    url: '/contact',
    text: 'contact',
  },
  // {
  //   id: 5,
  //   url: '/profile',
  //   text: 'profile',
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
