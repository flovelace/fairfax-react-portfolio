import React from 'react';
import { thisUrl } from '../../utils/helpers';

function Project({ name, githubLink, feature, index }) {
    return (
        
        <div className={(feature && `feature`) || `portfolio-img-container`}>
            
            <div className='img-cont flex justify-center align-center'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <div className='link-container flex justify-center align-center'>
                <a
                    className='portfolio-link'
                    target='_blank'
                    rel='noreferrer'
                    href={githubLink || `https://github.com/flovelace/${thisUrl(name)}`}>
                    Github
                </a>
            </div>
            <img 
            className='portfolio-img'
            src={require(`../../assets/imgs/projects/project-${index}.png`)} 
            alt={`Screenshot of ${name}`} />
        </div>
    );
};

export default Project;