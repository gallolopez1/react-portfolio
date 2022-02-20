import React from 'react';

function Home(props) {
    return (
        <section id="Home" style={{ padding: '8rem', width: 'auto' }}>
            <div data-aos="fade-right" data-aos-duration="1500">
                <h4 className='fw-light'>Hi, my name is</h4>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
                <h1 className='fw-bolder mt-5 mb-5' style={{ fontSize: '4rem' }}>Gabriel Gallo Lopez.</h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="500">
                <h2 className='fw-regular'>An architect by profession, curious by nature, leveraging a design background to build creative solutions.</h2>
            </div>

        </section>

    );
}

export default Home;