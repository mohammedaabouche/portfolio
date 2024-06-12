import '../style/style.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Cursus from '../components/Cursus';
function Home() {
  return (
    <div className='home' >
      <NavBar />
      <Profile />
      
      <Cursus />
      <h1>to be Continued ...</h1>
    </div>
  );
}
export default Home;