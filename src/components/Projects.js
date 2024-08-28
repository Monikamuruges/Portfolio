import React from 'react';


function Projects() {
    return (
        <section id="projects">
        <h1 className="heading">Projects</h1>
        <div className="row">
            <div class="box">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTposvw8bgXAUT3znhSKw8f6w3i7LqVO1MxnQ&s" alt=" "/>
                <h2 class="headings">Voice Assistance</h2>
                <p> It is a voice assistance devloped using python ,It can open up the application,
                    Google and YouTube and also calculate any mathematical question etc by just giving the voice command.</p>
            </div>
            <div className="box">
                <img src="https://www.bytewebster.com/javascriptprojects/uploads/images/animated-glassmorphism-calculator-using-html-css-and-javascript-image.jpg" alt=" "/>
                <h1 className="headings">Javascript Calculator</h1>
                <p> It is a simple calculator build using Javascript,It does straightforward tasks like addition, subtraction, 
                    multiplication, and division</p>
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

