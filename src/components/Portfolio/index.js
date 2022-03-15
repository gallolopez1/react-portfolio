import React, { useState } from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const Portfolio = ({ category }) => {
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: 'KEEP',
            category: 'web development',
            image: require('../../assets/img/web-development/KEEP/keep.jpg'),
            url: "https://ancient-depths-61432.herokuapp.com/",
            repoUrl: "https://github.com/gallolopez1/keep",
            description:
                "Keep is a MERN stack app using GraphQL to track all of your To-Dos and all of your accomplishments. Simply sign up and use this app regardless of your device to keep track of all your tasks."
        },
        {
            name: 'The Hype',
            category: 'web development',
            image: require('../../assets/img/web-development/THE HYPE/the-hype.png'),
            url: "https://immense-springs-30161.herokuapp.com/",
            repoUrl: "https://github.com/gallolopez1/proj-02-TheHype",
            description:
                "The Hype is the newest website for today's trends. Login and you can post, edit and comment other posts in The Hype community!"
        },
        {
            name: 'Flight For Tonight',
            category: 'web development',
            image: require('../../assets/img/web-development/Flight for tonight/flight-for-tonight.png'),
            url: "https://mloercher.github.io/flight-for-tonight/index.html",
            repoUrl: "https://github.com/gallolopez1/flight-for-tonight",
            description:
                "We developed this app to free your sense of adventure! All of us love to travel and money shouldn't impede us from doing so. Therefore, no matter what your financial situation is, we will help you find a destination. Just type your budget, origin, departure date and get ready to discover your next journey!"
        },
        {
            name: 'Deincokwi',
            category: 'web development',
            image: require('../../assets/img/web-development/Deincokwi/Deincokwi.png'),
            url: "https://www.deincokwi.com/",
            description:
                "Freelance web development for Deincokwi, a company founded in the city of Guadalajara, Jalisco, a leader in engineering and construction in the public and private sectors."
        },
        {
            name: 'Concept180',
            category: 'web development',
            image: require('../../assets/img/web-development/Concept180/Concept180.PNG'),
            url: "https://www.concept180pv.com/",
            description:
                "Freelance web development for Applegate Realtors. Residences designed to make the everyday extraordinary."
        },
        {
            name: 'My First Online Portfolio',
            category: 'web development',
            image: require('../../assets/img/web-development/Portfolio 01/portfolio01.jpg'),
            url: "https://gallolopez1.github.io/Portfolio/",
            repoUrl: "https://github.com/gallolopez1/Portfolio",
            description:
                "My first HTML + CSS portfolio featuring my work as an architect and web developer."
        },
        {
            name: 'Weather Dashboard',
            category: 'web development',
            image: require('../../assets/img/web-development/Weather App/desktop-weather-dashboard.jpg'),
            url: "https://gallolopez1.github.io/weather-dashboard/",
            repoUrl: "https://github.com/gallolopez1/weather-dashboard",
            description:
                "A responsive app using API calls to retrieve weather data for cities."
        },

    ]);

    // const currentProject = projects.filter(project => project.category === category);


    return (
        <section className='mt-5 mb-5' style={{ height: '100vh' }} data-aos="fade-up" data-aos-duration="1600">
            <h3 className='text-center' >
                <u>Web Development</u>
            </h3>
            <br />
            <div className="row justify-content-center portfolio" >
                {projects.map((project) => (
                    <div className='col-12 col-md-6 col-lg-3 m-2'>
                        <div className="card m-2 h-100" key={project.name}>
                            <img src={project.image} className="image-card card-img-top" alt={project.name}></img>
                            <div className="card-body">
                                <h5 className="card-title fw-light text-dark">{project.name}</h5>
                                <p className="card-text text-dark">{project.description}</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <a href={project.url} target="_blank" className="btn btn-primary m-2 btn-dark change2">View the project</a>
                                {project.repoUrl ? <SocialMediaIconsReact borderColor="rgba(0,0,0,0.53)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(13,13,13,0.96)" backgroundColor="rgba(0,0,0,0)" iconSize="3" roundness="20%" url={project.repoUrl} size="54" /> : ""}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Portfolio;