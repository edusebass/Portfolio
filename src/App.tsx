import {} from 'react'
import Header from './components/header';
import Intro from './components/intro';
import Footer from './components/footer';
import Skills from './components/skills';
import Project from './components/projects';
import AboutMe from './components/aboutme';

function App() {
  
  return (
    <>
      <body className="font-mono min-h-screen bg-gradient-to-r from-black to-blue-950">
        
        <Header />
        <Intro/>
        <Skills/>
        <Project/>
        <AboutMe/>
        
        <Footer/>
        
        
      </body>
    </>
  )
}

export default App;
