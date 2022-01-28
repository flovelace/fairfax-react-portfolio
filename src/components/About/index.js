import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img
            className='fairfax-portfolio-photo'
            src={require('../../assets/lol-chris.jpg')} alt='Fairfax Lovelace' />
            <p className='about-text'>Hello, it's nice to meet you! My name is Fairfax, and I am a MERN full stack developer. I like to make music, and I also speak Norwegian.</p>
            <p className='about-text'>Jeg heter Fairfax og jeg kom til Kanada i en skip laget av gravkister med en pose poteter.</p>
        </section>
    );
};

export default About;