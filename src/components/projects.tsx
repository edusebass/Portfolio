import imgSimon from '../../public/img/simon.png';
import imgDicee from '../../public/img/dicee.png';
import projectc from '../../public/img/projectc++.png';
import detectot from '../../public/img/detector de caras.png';
import javacrud from '../../public/img/JAVACRTUD.png';
import apipokemon from '../../public/img/apìpokemon.png';
import calculador from '../../public/img/calculadora.png';
import appfarmacia from '../../public/img/appfarmacia.png';
import tolist from '../../public/img/tolist.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery, BiLogoCPlusPlus,BiLogoPython, BiLogoJava } from 'react-icons/bi';

// import { SiMysql } from 'react-icons/si';


// import Button from './button';
import Card from './Card';


const Project = () => {
    const icons1 = [BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery];
    const iconColors = ['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-blue-700'];
    const iconNames = ['HTML5', 'CSS3', 'JavaScript', 'jQuery'];

    return (
        <>
            <h2 className="text-yellow-400 font-extrabold text-center pb-8 text-3xl ">Projectos</h2>
            <section className="justify-center  flex flex-wrap min-h-screen text">
                <Card img={imgSimon} titulo='SIMON DICEE WEBSITE' fecha='Julio 2023'
                descripcion='Videojuego sobre mem<orización interactiva.'
                icons={icons1}
                iconColors={iconColors}
                iconNames={iconNames}
                linkRepo='https://github.com/edusebass/SIMONDICEE-WEBSITE'
                linkWeb='https://edusebass.github.io/SIMONDICEE-WEBSITE/'
                />
                <Card img={imgDicee} titulo='Dados Game WEBSITE' fecha='Julio 2023'
                descripcion='Sitio web de juegos que permite a los usuarios participar en un juego de dados online. El objetivo del juego es conseguir el mayor número posible.'
                icons={icons1}
                iconColors={iconColors}
                iconNames={iconNames}
                linkRepo='https://github.com/edusebass/DICEE-website'
                linkWeb='https://edusebass.github.io/DICEE-website/'
                />
                <Card img={projectc} titulo='APP Control de Inventario' fecha='Marzo 2023'
                descripcion='Proyecto realizado con C++ su función es el control de inventarios de productos, y CRUD de administradores y clientes. Los datos seguardan en archivos(.txt).'
                icons={[BiLogoCPlusPlus]}
                iconColors={["text-blue-600"]}
                iconNames={["C++"]}
                linkRepo='https://github.com/edusebass/import-project-cplusplus'
                linkWeb=''
                />
                <Card img={javacrud} titulo='APP Control de Inventario' fecha='Agosto 2023'
                descripcion='Calculadora swing Java con todas las características de una calculadora trigonométrica normal.'
                icons={[BiLogoJava]}
                iconColors={["text-orange-600"]}
                iconNames={["Java"]}
                linkRepo='https://github.com/edusebass/PruebaPOOSQL'
                />
                <Card img={detectot} titulo='Detector de rostros' fecha='Agosto 2023'
                descripcion='App con python que detecta todo tipo de rostros.'
                icons={[BiLogoPython]}
                iconColors={["text-blue-400"]}
                iconNames={["Python"]}
                linkRepo='https://github.com/edusebass/Detector-de-caraas-con-Python'
                />
                <Card img={apipokemon} titulo='ApiPokemon Cartas' fecha='Agosto 2023'
                descripcion='Pagina web que trae elementos de una api de pokemon y cada vez que recargas puedes ver nuevas cartas de pokemon.'
                icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript]}
                iconColors={['text-orange-600', 'text-blue-500', 'text-yellow-400']}
                iconNames={['HTML5', 'CSS3', 'JavaScript']}
                linkRepo='https://github.com/edusebass/ApiPokemon'
                linkWeb='https://edusebass.github.io/ApiPokemon/'
                />
                <Card img={calculador} titulo='App Calculadora Java' fecha='Julio 2023'
                descripcion='Calculadora swing Java con todas las características de una calculadora trigonométrica normal.'
                icons={[BiLogoJava]}
                iconColors={["text-orange-600"]}
                iconNames={["Java"]}
                linkRepo='https://github.com/edusebass/javaxCalculadora'
                />
                <Card img={appfarmacia} titulo='App Gestion Farmacia' fecha='Septiembre 2023'
                descripcion='App realizada con java que consiste en gestionar productos y ralizar las ventas por caja, y administrar el stock de productos y personas.
                Gestiona ventas y devuelve facturas de las compras y reportes.'
                icons={[BiLogoJava]}
                iconColors={["text-orange-600"]}
                iconNames={["Java"]}
                linkRepo='https://github.com/bryandelgado99/Proyecto-Farmacia--2do-Bimestre'
                linkWeb='https://www.youtube.com/watch?v=QCb2bVLnhnM'
                />
                <Card img={tolist} titulo='TodoList' fecha='Septiembre 2023'
                descripcion='Proyecto de grupo. Aplicación web de gestión de tareas, con funcionalidad CRUD.'
                icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript]}
                iconColors={['text-orange-600', 'text-blue-500', 'text-yellow-400']}
                iconNames={['HTML5', 'CSS3', 'JavaScript']}
                linkRepo='https://github.com/brittanypallasco2003/Organizador'
                />

            </section>    
            
        </>
    )
}

export default Project;