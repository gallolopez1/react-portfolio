import React from 'react';
import resume from '../../assets/resume/resume.pdf';
function Nav(props) {
    return (
        <header>
            <nav className='d-flex align-items-center justify-content-between m-5 mb-0 pb-3'>
                <a style={{ textDecoration: "none", color: "var(--light-color)", fontSize: "larger", fontWeight: "bolder", fontFamily: "var(--main-font-family)" }} href="/">Gabriel Gallo Lopez</a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-light change" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light change" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light change" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-outline-light text-light change" rel="noreferrer" href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;