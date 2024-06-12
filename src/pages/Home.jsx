import '../style/style.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
function Home() {
  return (
    <div className='home' >
      <NavBar />
      <Profile />
    </div>
  );
}
export default Home;