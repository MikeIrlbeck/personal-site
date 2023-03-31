import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/Projects';
import { useParams } from 'react-router-dom';
const SingleProject = () => {
  const { id } = useParams();
  console.log('single project - ', id);
  const { title, url, subTitle, stars, githubLink, video } = data.find(
    (item) => item.id === parseInt(id)
  );
  return (
    <div className='page-container'>
      <h1 className='page-title'>{title}</h1>
      <h4 className='page-subtitle'>{subTitle}</h4>
      {video ? (
        <iframe
          id='project-video'
          title='YouTube video player'
          loading='lazy'
          src={video}
          className='individual-project-img'
        ></iframe>
      ) : (
        <img
          src={url}
          alt={`${title}`}
          className='individual-project-img'
        ></img>
      )}
      {stars && githubLink && (
        <p>
          <a href={githubLink}>Github. Stars {stars}</a>
        </p>
      )}
    </div>
  );
};

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  stars: PropTypes.number,
  githubLink: PropTypes.string,
  video: PropTypes.string,
};

export default SingleProject;
