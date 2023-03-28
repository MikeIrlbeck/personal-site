import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/Projects';
import { useParams } from 'react-router-dom';
const SingleProject = () => {
  const { id } = useParams();
  console.log('single project - ', id);
  const { title, url, subTitle, stars, video } = data.find(
    (item) => item.id === parseInt(id)
  );
  return (
    <div className='single-project'>
      <h1>{title}</h1>
      <h4>{subTitle}</h4>
    </div>
  );
};

SingleProject.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  stars: PropTypes.number,
  video: PropTypes.string,
};

export default SingleProject;
