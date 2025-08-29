import React from 'react';


function Projects() {
    return (
        <section id="projects">
        <h1 className="heading">Projects</h1>
        <div className="row">
            <div class="box">
                <img src="https://www.vidyalayaschoolsoftware.com/webassets/images/vidyalaya_maldives/vidyalaya_maldives_1.svg" alt=" "/>
                <h2 className="headings">Student Management App</h2>
                <p>  Developed a console-based application to manage student records with multi-subject support using Java and JDBC. 
        </p>
            </div>
            <div className="box">
                <img src="https://spaceliftio.wpcomstaging.com/wp-content/uploads/2023/05/202.devops-pipeline.png" alt=" "/>
                <h1 className="headings">Devops CI/CD Pipeline(Capstone)</h1>
                 <p> Built a CI/CD pipeline to automate version control, build, and deployment for e-commerce web application.</p>
        </div>
        <div className="box">
                <img src="https://assets-160c6.kxcdn.com/wp-content/uploads/2022/08/2022-08-09-en-de.jpg" alt=" "/>
                <h1 className="headings">E-commerce Website</h1>
                 <p> It is a E-commerce website,a digital platform to buy and sell products.It typically features 
                   product listings with images,descriptions and prices.</p>
        </div>


            </div>
            </section>
    );
}

export default Projects;

