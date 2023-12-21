import Header from '../components/header';
import Intro from '../components/intro';
import Footer from '../components/footer';
import Skills from '../components/skills';
import Project from '../components/projects';
import AboutMe from '../components/aboutme';
import Experiencia from '../components/Experiencia';
import MainServicios from '../components/MainServicios';
import Educacion from '../components/Educacion';


const LandingPage = () => {
    return (
        <>
            <body className="font-mono min-h-screen bg-gradient-to-r from-black to-indigo-950">
                <Header />
                <Intro/>
                <Skills/>
                <Experiencia/>
                <Project/>
                <Educacion />
                <MainServicios/>
                <AboutMe/>
                <Footer/>
            </body>
        </>
    )

}

export default LandingPage