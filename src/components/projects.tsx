import imgSimon from '../../public/img/simon.png';
import imgDicee from '../../public/img/dicee.png';
import projectc from '../../public/img/projectc++.png';
// import detectot from '../../public/img/detector de caras.png';
import javacrud from '../../public/img/JAVACRTUD.png';
// import apipokemon from '../../public/img/apìpokemon.png';
// import calculador from '../../public/img/calculadora.png';
// import appfarmacia from '../../public/img/appfarmacia.png';
// import tolist from '../../public/img/tolist.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery, BiLogoYoutube, BiLogoCPlusPlus,BiLogoPython, BiLogoJava } from 'react-icons/bi';

// import { SiMysql } from 'react-icons/si';


// import Button from './button';
import Card from './Card';


const Project = () => {
    const icons1 = [BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery];
    const iconColors = ['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-blue-700'];
    const iconNames = ['HTML5', 'CSS3', 'JavaScript', 'jQuery'];

    return (
        <>
            <section className="justify-center bg-white flex flex-wrap min-h-screen text">
                <Card img={imgSimon} titulo='SIMON DICEE WEBSITE' fecha='Julio 2023'
                descripcion='Videojuego sobre mem<orización interactiva.'
                icons={icons1}
                iconColors={iconColors}
                iconNames={iconNames}
                linkRepo='https://github.com/edusebass/SIMONDICEE-WEBSITE'
                />

                {/* <Card img={imgDicee} titulo='Dados Game WEBSITE' fecha='Julio 2023'
                descripcion='Sitio web de juegos que permite a los usuarios participar en un juego de dados online. El objetivo del juego es conseguir el mayor número posible.'
                icons={icons1}
                iconColors={iconColors}
                iconNames={iconNames}
                />

                <Card img={projectc} titulo='APP Control de Inventario' fecha='Marzo 2023'
                descripcion='Proyecto realizado con C++ su función es el control de inventarios de productos, y CRUD de administradores y clientes. Los datos seguardan en archivos(.txt).'
                icons={iconsCplus}
                iconColors={["text-blue-600"]}
                iconNames={["C++"]}
                />

                <Card img={javacrud} titulo='APP Control de Inventario' fecha='Agosto 2023'
                descripcion='Calculadora swing Java con todas las características de una calculadora trigonométrica normal.'
                icons={[BiLogoJava]}
                iconColors={["text-orange-600"]}
                iconNames={["Java"]}
                /> */}
                
            </section>    
            
        </>
    )
}

export default Project;