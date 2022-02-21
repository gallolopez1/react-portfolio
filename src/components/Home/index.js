import React from 'react';

function Home(props) {
    return (
        <section className="home" id="Home">
            <div data-aos="fade-right" data-aos-duration="1500">
                <h4 className='fw-light' style={{ color: "#78ce92" }}>Hi, my name is</h4>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
                <h1 className=' fw-bolder mt-5 mb-5' >Gabriel Gallo Lopez.</h1>
            </div>
            <div data-aos="fade-right" data-aos-duration="500">
                <h2 className='fw-regular' style={{ color: "#78ce92" }}>An architect by profession, curious by nature, leveraging a design background to build creative solutions.</h2>
            </div>

        </section>

    );
}

export default Home;