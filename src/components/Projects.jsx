import React from "react";

import "../style/style.css";


function Projects() {
  const projects = [
    {
      title: "DIGIHRM",
      description:
        "DIGIHRM is a full-stack application for managing employees, departments, and projects. It allows the user to create, update, and delete employees, departments, and projects. The user can also assign employees to projects and departments. My task in the project was concerning the employee aspect.",
      tasks: [
        "Create, update, and delete employees",
        "Assign employees to departments",
        "Assign employees to projects",
        "View employees",
        "View employee's details",
        "Assign and View employee's assets",
        "Assign and View employee's projects",
        "View employee's departments",
        "View employee's salary",
        "View employee's attendance",
        "View employee's leaves",
        "View employee's documents",
        "View employee's tasks",
        "View employee's performance",
      ],
      pj: [
        {
          type: "pdf",
          file: require("../assets/documents/IA .pdf"),
          name: "Rapport",
          icon: require("../assets/icons/pdf.svg").default,
        },
        {
          type: "pdf",
          file: require("../assets/documents/IA .pdf"),
          name: "Rapport 1 ",
          icon: require("../assets/icons/pdf.svg").default,
        },
        {
          type: "pdf",
          file: require("../assets/documents/IA .pdf"),
          name: "Rapport 2 ",
          icon: require("../assets/icons/pdf.svg").default,
        },
        
       
      ],
      tech: [
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/tailwindcss-original.svg").default,
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/prisma-original.svg").default,
        require("../assets/icons/postman-original.svg").default,
        require("../assets/icons/typescript-original.svg").default,
        require("../assets/icons/javascript-original.svg").default,
        require("../assets/icons/jira-original.svg").default,
      ],
    },
    {
      title: "DIGIHRM",
      description:
        "DIGIHRM is a full-stack application for managing employees, departments, and projects. It allows the user to create, update, and delete employees, departments, and projects. The user can also assign employees to projects and departments. My task in the project was concerning the employee aspect.",
      tasks: [
        "Create, update, and delete employees",
        "Assign employees to departments",
        "Assign employees to projects",
        "View employees",
        "View employee's details",
        "Assign and View employee's assets",
        "Assign and View employee's projects",
        "View employee's departments",
        "View employee's salary",
        "View employee's attendance",
        "View employee's leaves",
        "View employee's documents",
        "View employee's tasks",
        "View employee's performance",
      ],
      pj: [
        {
          type: "pdf",
          file: require("../assets/documents/IA .pdf"),
          name: "Rapport",
          icon: require("../assets/icons/pdf.svg").default,
        },
        {
          type: "pdf",
          file: require("../assets/documents/IA .pdf"),
          name: "Rapport 1 ",
          icon: require("../assets/icons/pdf.svg").default,
        },
        {
          type: "pdf",
          file: require("../assets/documents/IA .pdf"),
          name: "Rapport 2 ",
          icon: require("../assets/icons/pdf.svg").default,
        },
        
       
      ],
      tech: [
        require("../assets/icons/react-original.svg").default,
        require("../assets/icons/nestjs-original.svg").default,
        require("../assets/icons/tailwindcss-original.svg").default,
        require("../assets/icons/nodejs-original.svg").default,
        require("../assets/icons/mysql-original.svg").default,
        require("../assets/icons/prisma-original.svg").default,
        require("../assets/icons/postman-original.svg").default,
        require("../assets/icons/typescript-original.svg").default,
        require("../assets/icons/javascript-original.svg").default,
        require("../assets/icons/jira-original.svg").default,
        require("../assets/icons/rabbitmq-original.svg").default
      ],
    }
  ];

  return ( 
    <div id="My Projects" >
      <h1 className="projectsh1">My Projects</h1>
      <div className="projects grid grid-cols-2 gap-14">

    
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <h5>Description</h5>
          <p>{project.description}</p>

          <ul className="project-tasks">
            {project.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <h5>Technologies & Tools</h5>
          <div className="grid grid-cols-12 gap-0">
            {project.tech.map((tech, index) => (
              <img key={index} src={tech} alt="" />
            ))}
          </div>
          <h5>Project Files</h5>
          <ul className="project-files grid grid-cols-3 gap-5">
            {project.pj.map((file, index) => (
              <div className="project-file" key={index}>
                
                  <a  href={file.file} download={`${file.name}.pdf`}>
                    <p>{file.name}</p>
                  </a>
                </div>
       
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Projects;
