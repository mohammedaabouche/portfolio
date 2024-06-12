import React from "react";
import "../style/style.css";
import profileImage from "../assets/profile.jpeg";
function Profile() {
  return (
    <div id="About Me" className="profile grid grid-cols-12 gap-2">
      <div className="profile-image col-span-4">
        <img
          src={profileImage}
          alt="profile"
          className=" w-80 h-80 object-cover"
        />
      </div>
      <div className="profile-info col-span-7 col-start-5">
        <h1 className="name">mohammed aabouche </h1>
        <h3 className="status">Computer engineering student</h3>
       
          <p>
            As an engineering student at the Mohammadia School of Engineers,
            majoring in Computer Science and Digitalization, I possess an
            insatiable curiosity for all facets of this dynamic field. My
            passion particularly lies in exploring{" "}
            <span>DevOps methodologies</span> and{" "}
            <span>cybersecurity practices</span>, driven by a deep-seated desire
            to understand the intricate workings of systems and technologies. I
            thrive on unraveling complexities, relishing the opportunity to
            delve into the underlying mechanisms that power digital innovation.
            With an innate love for problem-solving and a dedication to
            continuous learning, I eagerly embrace challenges and aspire to
            contribute meaningfully to the ever-evolving landscape of
            technology.
          </p>
     
        <p>
          Looking ahead, I am eager to contribute meaningfully to the
          ever-evolving landscape of technology. I aspire to leverage my
          expertise in DevOps and cybersecurity to innovate and drive impactful
          solutions that address real-world problems. Through internships,
          collaborative projects, and continuous self-improvement, I aim to
          leave a lasting mark on the tech industry, pushing the boundaries of
          what is possible and inspiring others to pursue excellence.
        </p>
      </div>
    </div>
  );
}

export default Profile;
