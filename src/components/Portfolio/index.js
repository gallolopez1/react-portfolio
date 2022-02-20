import React from 'react';

function Portfolio(props) {
    return (
        <section id='Portfolio'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={require("../../assets/img/web-development/THE HYPE/the-hype.png")} className="d-block w-100" style={{ borderRadius: "2rem" }} alt="Deincokwi.com"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Deincokwi</h5>
                            <a className="nav-link active text-light change" href="https://www.deincokwi.com/">Visit this page.</a>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require("../../assets/img/web-development/Flight for tonight/flight-for-tonight.png")} className="d-block w-100" style={{ borderRadius: "2rem" }} alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Deincokwi</h5>
                            <a className="nav-link active text-light change" href="#">Visit this page.</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../assets/img/web-development/Deincokwi/Deincokwi.png")} className="d-block w-100" style={{ borderRadius: "2rem" }} alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Deincokwi</h5>
                            <a className="nav-link active text-light change" href="#">Visit this page.</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Portfolio;