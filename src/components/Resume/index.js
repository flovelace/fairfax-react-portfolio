import React from 'react';

function Resume() {
    return (
        <section>
            <a
            className='flex align-center resume-dl'
                href={require('../../assets/Resume Ada F. Lovelace 2.doc.pdf')}>Click the link to download a copy of my resume!</a>
        </section>
    );
};

export default Resume;