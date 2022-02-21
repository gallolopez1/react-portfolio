import React from 'react';
import resume from '../../assets/resume/resume.pdf';
function Nav({ currentPage, changePage }) {
    return (
        <header>
            <nav className=' media-nav d-flex align-items-center justify-content-between m-5 mb-0 pb-3 flex-wrap'>
                <a onClick={() => changePage('Home')} style={{ textDecoration: "none", color: "var(--light-color)", fontSize: "larger", fontWeight: "bolder", fontFamily: "var(--main-font-family)" }} href="#Home">Gabriel Gallo Lopez</a>
                <ul className="nav-list nav justify-content-end">
                    <li className="nav-item" data-aos="fade-down" data-aos-duration="500">
                        <a onClick={() => changePage('About')}
                            className={currentPage === 'About' ? "nav-link active text-success change" : "nav-link text-light change"}
                            href="#About">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item" data-aos="fade-down" data-aos-duration="750">
                        <a onClick={() => changePage('Portfolio')}
                            className={currentPage === 'Portfolio' ? "nav-link active text-success change" : "nav-link text-light change"}
                            href="#Portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item" data-aos="fade-down" data-aos-duration="1000">
                        <a onClick={() => changePage('Contact')}
                            className={currentPage === 'Contact' ? "nav-link active text-success change" : "nav-link text-light change"}
                            href="#Contact">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item" data-aos="fade-down" data-aos-duration="1500">
                        <a className="nav-link btn btn-outline-light text-light change" rel="noreferrer" href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;