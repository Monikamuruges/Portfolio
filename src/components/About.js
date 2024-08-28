import React from 'react';
import profileImage from '../images/profile1.jpg';

function About() {
    return (
        <section>
            <h3>About Me</h3>
            <img src={profileImage} alt="Profile" className="profile-image" />
            <h2>Hello! I'm Monika M,Iam a Passionate Frontend Develeoper.</h2>
                <p>I'm B.tech IT third-year student with strong passion for web design,particularly
            in front-end development.Alongside my enthusiasm for creating Users interfaces,
            I have acquired foundational knowledge in programming languages such a Java,C,Python.
            Iam a fast learner with keen interest in continually expanding my technical skills
            and staying current with industry trends.My dedication to my academic studies
            and personal projects reflets my commitment to pursing a successful
            carrer in technology.
            </p>
        </section>
    );
}

export default About;
