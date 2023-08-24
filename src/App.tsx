import {} from 'react'
import Header from './components/header';
import Intro from './components/intro';
import Footer from './components/footer';
import AboutMe from './components/aboutme';
import Project from './components/projects';


function App() {
  
  return (
    <>
      <body className="font-mono min-h-screen bg-gradient-to-r from-black to-blue-950">
        <Header />
        <Intro/>
        <AboutMe/>
        <Project/>
        <Footer/>
        
      </body>
    </>
  )
}

export default App