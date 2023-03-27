import React from 'react';
import data from '../data/Projects';

const Projects = () => {
  return (
    <div className='project-container'>
      <h1>Projects</h1>
      <ul className='projects-list'>
        {data.map((project) => {
          const { id, url, title, subTitle } = project;
          return (
            <li key={id} className='project'>
              <h4 className='project-title'>{title}</h4>
              <p className='project-subTitle'>{subTitle}</p>
              <img src={url} alt='Project' className='project-img' />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
