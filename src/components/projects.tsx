import imgSimon from '../../public/img/simon.png';
import imgDicee from '../../public/img/dicee.png';
import projectc from '../../public/img/projectc++.png';
import detectot from '../../public/img/detector de caras.png';
import javacrud from '../../public/img/JAVACRTUD.png';
import apipokemon from '../../public/img/apìpokemon.png';
import calculador from '../../public/img/calculadora.png';
import appfarmacia from '../../public/img/appfarmacia.png';
import tolist from '../../public/img/tolist.png';
import apiperson from '../../public/img/apiperson.png';
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery, BiLogoCPlusPlus,BiLogoPython, BiLogoJava,
    BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoFirebase, BiLogoNodejs, BiSolidFileJson, BiLogoMongodb, BiDirections } from 'react-icons/bi';
import { TbBrandVite } from 'react-icons/tb';
import { SiExpress, SiMysql  } from 'react-icons/si';
import { AiOutlinePercentage, AiFillApi } from 'react-icons/ai';

import Card from './Card';


const Project = () => {
    const icons1 = [BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery];
    const iconColors = ['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-blue-700'];
    const iconNames = ['HTML5', 'CSS3', 'JavaScript', 'jQuery'];

    return (
        <>
            <h2 className="text-yellow-400 font-extrabold text-center pb-8 text-5xl mt-10 " id='projects'>PROJECTOS</h2>
            <section className="justify-center flex flex-wrap ">
                <Card 
                img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                titulo='Stock Llantas'
                fecha='Octubre 2023'
                descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow-600", "text-yellow-500"]}
                iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                linkRepo='https://github.com/edusebass/llantas'
                linkWeb='https://llantas.vercel.app/'
                />
                <Card
                img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1698526925/Portfolio/chat_f0exdc.png'
                titulo='BindevChat'
                fecha='Octubre 2023'
                descripcion='Aplicación web Chat realizado con webSockets para interaccion bidireccional sin necesidad de recargar(f5),
                utilizando una base de datos(MONGODB)'
                icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, SiExpress, BiLogoMongodb, BiDirections]}
                iconColors={['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-green-500', 'text-black', 'text-green-400',
                'text-gray-600']}
                iconNames={['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets']}
                linkRepo='https://github.com/edusebass/APP-REACT-MESSAGES'
                linkWeb='https://app-react-messages-production.up.railway.app/'
                />
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
                icons={[BiLogoJava, SiMysql]}
                iconColors={["text-orange-600", 'text-sky-700']}
                iconNames={["Java", 'MySQL']}
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
                <Card 
                img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1697490315/Portfolio/portfolio_taknef.png"
                titulo='Portafolio Personal'
                fecha='Octubre 2023'
                descripcion='Portafolio personal en donde se muestra todo los proyectos que realizado e informacion sobre mi.'
                icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite]}
                iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow-600"]}
                iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite"]}
                linkRepo='https://github.com/edusebass/Portfoliox'
                />
                <Card 
                img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1697585921/Portfolio/genreator_name_mfpdkr.png"
                titulo='Generator Name'
                fecha='Octubre 2023'
                descripcion='WebPage hecha con backend para generar nombres aleatorios'
                icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, SiExpress, AiOutlinePercentage]}
                iconColors={['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-green-500', 'text-black', 'text-red-500']}
                iconNames={['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'EJS']}
                linkRepo='https://github.com/edusebass/GeneratorName'
                linkWeb='https://generator-name.vercel.app/'
                />
                <Card 
                img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1697660011/Portfolio/Captura_de_pantalla_2023-10-18_151306_crht5r.png"
                titulo="To Do list"
                fecha="Octubre 2023"
                descripcion='WebPage hecha con backend para guardar y anotar tareas TODO LIST'
                icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, SiExpress, AiOutlinePercentage]}
                iconColors={['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-green-500', 'text-black', 'text-red-500']}
                iconNames={['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'EJS']}
                linkRepo='https://github.com/edusebass/ToDolist'
                linkWeb='https://to-dolist-kzwz94jbd-edusebass.vercel.app/'
                />
                <Card
                img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1697834315/Portfolio/tacotown_nu1fe6.png"
                titulo="TacoTown"
                fecha="Octubre 2023"
                descripcion='Web Page que indica las recetas para un taco, realizado con backend y conectado a una API'
                icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, SiExpress, AiOutlinePercentage, BiSolidFileJson, AiFillApi]}
                iconColors={['text-orange-600', 'text-blue-500', 'text-yellow-400', 'text-green-500', 'text-black', 'text-red-500', 'text-gray-500']}
                iconNames={['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'EJS', 'JSON', 'API']}
                linkRepo='https://github.com/edusebass/TacoTown'
                linkWeb='https://taco-town.vercel.app/'
                />
                <Card 
                img={apiperson}
                titulo='API PERSON'
                fecha='Agosto 2023'
                descripcion='Aplicacion web creada con REACT obtniendo datos de una api que devuelve infomoracion en la cual se implmenta multiple metodos
                como filtrar ordenar, buscar y eliminar'
                icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                iconColors={["text-orange-600", "text-sky-500", "text-sky-700", "text-blue-600", "text-yellow-600", "text-yellow-500"]}
                iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                linkRepo='https://github.com/edusebass/React'
                linkWeb='https://apiperson.vercel.app/'
                />
            </section>      
        </>
    )
}

export default Project;