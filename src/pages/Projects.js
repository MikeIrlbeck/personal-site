import React from 'react';
import data from '../data/Projects';
// import { links } from '../data/NavLinks';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='page-container'>
      <h1 className='page-title'>Projects</h1>
      <ul className='projects-list'>
        {data.map((project) => {
          const { id, url, title, subTitle } = project;
          return (
            <li key={id} className='project'>
              {/* ${links.find((item) => item.id === 'projects').url} */}
              <Link to={`/projects/${id}`}>
                <h4 className='project-title'>{title}</h4>
                <p className='project-subTitle'>{subTitle}</p>
                <img src={url} alt='Project' className='project-img' />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
