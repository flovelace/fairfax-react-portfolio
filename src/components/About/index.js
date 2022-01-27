import React from 'react';

function About() {
    return (
        <section className='about flex align-center'>
            <img
            className='fairfax-portfolio-photo'
            src={require('../../assets/lol-chris.jpg')} alt='Fairfax Lovelace' />
            <p className='about-text'>my name is fairfax and I came to canada in ship made out of coffins and carrying a bag of potatoes</p>
        </section>
    );
};

export default About;