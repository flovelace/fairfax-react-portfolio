import React, { useState } from "react";
import Project from '../Project';

function Portfolio() {
    const [ projects ] = useState([
        {
            name: 'Pizza Hunt',
            deployLink: 'https://young-caverns-80211.herokuapp.com/',
            githubLink: 'https://github.com/flovelace/pizza-hunt',
            feature: true

        },
        {
            name: 'Cool Tech Blog',
            deployLink: 'https://young-caverns-80211.herokuapp.com/',
            githubLink: 'https://github.com/flovelace/cool-tech-blog'
        },
        {
            name: 'Note Taker',
            deployLink: 'https://peaceful-castle-75538.herokuapp.com/',
            githubLink: 'https://github.com/flovelace/note-taker'
        }
    ])

    return (
        <section className="portfolio-container justify-center">
            {projects.map((project, i) =>
            <Project name={project.name} index={(projects.length - i - 1)} githubLink={project.githubLink} deployLink={project.deployLink} feature={project.feature}/>
            )}
        </section>
    );
};

export default Portfolio;