import '../style/style.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Cursus from '../components/Cursus';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
function Home() {
  return (
    <div className='home' >
      <NavBar />
      <Profile />
      <Cursus />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}
export default Home;