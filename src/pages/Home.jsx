import '../style/style.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Cursus from '../components/Cursus';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
function Home() {
  return (
    <div className='home' >
      <NavBar />
      <Profile />
      <Cursus />
      <h1>to be Continued ...</h1>
      <Skills/>
      <Projects />
    </div>
  );
}
export default Home;