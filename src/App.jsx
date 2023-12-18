import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Achivements from './components/achivements/Achivements'
import PrevExperience from './components/prevExperience/PrevExperience';
const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <PrevExperience />
        <Experience/>
        <Portfolio/>
        <Achivements />
        <Contact/>
        <Footer/>
    </>
  ); 
}

export default App;