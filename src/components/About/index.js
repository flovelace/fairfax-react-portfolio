import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img
            className='fairfax-portfolio-photo'
            src={require('insert my headshot here').default} alt='Fairfax Lovelace' />
            <p className='about-text'>Write some things in here about how awesome I am.</p>
        </section>
    );
};

export default About;