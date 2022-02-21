import React from 'react';
import Avatar from '../../assets/img/avatar/avatar.png'

function About(props) {
    return (
        <section className=' about-me d-flex align-items-center justify-content-center flex-column'>
            <img src={Avatar} style={{ width: "9rem" }} data-aos="fade-right" data-aos-duration="2000"></img>
            <h2 data-aos="fade-right" data-aos-duration="1000">
                <u>About Me</u>
            </h2>
            <br />
            <div className='m-3' data-aos="fade-right" data-aos-duration="750">
                <h4 className='text-wrap text-justify'>
                    <b className="curious">Dog lover</b>, <b className="curious">bibliophile</b> and <b className="curious">gym
                        enthusiast</b>. Originally from the beautiful and vibrant city of Guadalajara, Mexico, where I studied <b className="curious">architecture</b> and graduated from <a className="hyperlink" style={{ textDecoration: "underline", color: "#78ce92", fontWeight: "bold" }} href="https://www.tec.mx/en">Tec de Monterrey.</a>
                </h4>
                <br />
                <h4 className='text-wrap text-justify'>
                    I then started working as a freelancer, developing architectural concepts, schematic designs and a few websites. In 2020 I moved to the craziest of cities <b className="curious">(New York City)</b>, where I currently live and work as an <b className="curious">architect designer</b> for <a className="hyperlink" style={{ textDecoration: "underline", color: "#78ce92", fontWeight: "bold" }} href="https://www.rockwellgroup.com/">Rockwell Group.</a>
                </h4>
                <br />
                <h4 className='text-wrap text-justify'>
                    At <a className="hyperlink" style={{ textDecoration: "underline", color: "#78ce92", fontWeight: "bold" }} href="https://www.rockwellgroup.com/">Rockwell Group</a>, I have worked hand in hand with a diverse group of interior designers, architects and project managers on multiple projects ranging in scale, scope and location. From <b className="curious">educational architecture</b>, to <b className="curious">mixed-use commercial developments</b>, I have found that I become impassioned with whatever project I tackle.
                </h4>
                <br />
                <h4 className='text-wrap'>
                    My expertise is in the fields of <b className="curious">architecture</b> and <b className="curious">design</b> with some exposure to <b className="curious">web development</b>, however, my passion and desire to constantly learn and evolve take me to explore new fields such as <b className="curious">finance</b> and <b className="curious">technology</b>. Recently earned a certificate in full-stack development from Columbia University with newly developed skills in HTML, CSS,  JavaScript, Node.js, MySQL, React.js, and responsive web design.
                </h4>
            </div>
        </section >

    );
}

export default About;

