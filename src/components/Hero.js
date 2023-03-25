import React from 'react';
import hero from '../hero.jpeg';
import { useState } from 'react';
const Hero = () => {
  const [isPandaShowing, setIsPandaShowing] = useState(false);

  return (
    <>
      <section className='hero'>
        <button
          className='btn hero-btn'
          onClick={() => setIsPandaShowing(!isPandaShowing)}
        >
          {isPandaShowing ? 'Press to see Mike' : 'Tired of seeing Mike?'}
        </button>
        <img
          className='hero-img'
          src={
            isPandaShowing
              ? 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faliljoy.com%2Fwp-content%2Fuploads%2F2012%2F07%2FBaby-panda-Wolong-Panda-Center-China.jpg&f=1&nofb=1&ipt=ba111961ee0415c2c1a399a8d677e0eb26108a6e5175486ee19e2cff479b2c7a&ipo=images'
              : hero
          }
          alt='Mike Irlbeck'
        />
      </section>
    </>
  );
};

export default Hero;
