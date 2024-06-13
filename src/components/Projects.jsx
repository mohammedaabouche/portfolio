import React from "react";
import "../style/style.css";

function Projects() {
    const projects = [
        {
        title: "Portfolio",
        description:
            "This is my portfolio, where I showcase my skills, projects, and experiences. I built this website using React, Tailwind CSS, and Vercel.",
        
        images: [
            
        ],
        },
        
    ];
    return (
        <div id="My Projects" className="projects">
            <h1>My Projects</h1>
        {projects.map((project, index) => (
            <div key={index} className="project col-span-12">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            </div>
        ))}
        </div>
    );
}
export default Projects;