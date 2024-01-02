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
import AnimatedText from './AnimatedText'

const Project = () => {
    const icons1 = [BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoJquery];
    const iconColors = ['orange-600', 'blue-500', 'yellow-400', 'blue-700'];
    const iconNames = ['HTML5', 'CSS3', 'JavaScript', 'jQuery'];

    return (
        <>
            <AnimatedText 
                text='PROYECTOS'
                className='text-yellow-400 text-5xl font-extrabold center pb-8 5xl mt-28'
                fromTop
                stylesWords="hover:white"
            />
             <AnimatedText 
                text='Listado de proyectos en los que he trabajado'
                className='text-yellow-400 font-extrabold center pb-8 mx-10 sm:mx-0'
                fromTop
                stylesWords="hover:white"
            />
            <section className="sm:justify-evenly flex flex-wrap " id='educacion'>
                <Card 
                    img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1704215810/Portfolio/blog_tapxwh.png'
                    titulo='Blog-Bindev'
                    fecha='Enero - 2024'
                    descripcion='Blog desarrollo con backend para realizar CRUD a opiniones.'
                    iconNames={["HTML5", "CSS5", "JavaScript", "EJS", "Express.js"]}
                    icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, AiOutlinePercentage, SiExpress]}
                    iconColors={["orange-500", "blue-500", "yellow-400", "gray-500"]}
                    linkRepo=''
                />
                <Card 
                    img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1697491307/Portfolio/llantas_isrotf.png'
                    titulo='Stock Llantas'
                    fecha='Octubre 2023'
                    descripcion='Landing page que muestra por medio de un buscador la medida de neumatico que el cliente busca.'
                    icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite, BiLogoFirebase]}
                    iconColors={["orange-600", "sky-500", "sky-700", "blue-600", "yellow-600", "yellow-500"]}
                    iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                    linkRepo='https://github.com/edusebass/llantas'
                    linkWeb='https://llantas.vercel.app/'
                />
                <Card 
                    img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1703641612/Portfolio/devrise_mqkmbj.png"
                    titulo='DevRise'
                    fecha='Octubre - Noviembre 2023'
                    descripcion='Aplicacion web resposive realizada para un empresa, incluye formulario de contacto.'
                    icons={[BiLogoHtml5, BiLogoTailwindCss, BiLogoJavascript, TbBrandVite, BiLogoFirebase]}
                    iconColors={["orange-600", "sky-500", "yellow-400", "blue-600", "yellow-600", "yellow-500"]}
                    iconNames={["HTML5", "TailwindCss", "JavaScript","Vite", "Firebase"]}
                    linkRepo='https://github.com/williansaaid/devrise'
                    linkWeb='https://devrise-williansaaid.vercel.app/'
                />
                <Card 
                    img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1703091914/Portfolio/ofglqaafue7g8fg4riix.png"
                    titulo='RenderUsers'
                    fecha='Diciembre 2023'
                    descripcion='Aplicacion web realizada con Backend en el cual cada usuario podra loguearse y subir sus portafolios'
                    icons={[BiLogoHtml5, BiLogoTailwindCss, BiLogoJavascript, TbBrandVite, BiLogoFirebase]}
                    iconColors={["orange-600", "sky-500", "yellow-400", "blue-600", "yellow-600", "yellow-500"]}
                    iconNames={["HTML5", "TailwindCss", "JavaScript","Vite", "Firebase"]}
                    linkRepo='https://github.com/edusebass/BackendU/tree/renderP'
                    linkWeb='https://renderusers.onrender.com/'
                />
                <Card
                    img='https://res.cloudinary.com/dwowtb0ya/image/upload/v1698526925/Portfolio/chat_f0exdc.png'
                    titulo='BindevChat'
                    fecha='Octubre 2023'
                    descripcion='Aplicación web Chat realizado con webSockets
                    utilizando una base de datos(MONGODB)'
                    icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, SiExpress, BiLogoMongodb, BiDirections]}
                    iconColors={['orange-600', 'blue-500', 'yellow-400', 'green-500', 'black', 'green-400',
                    'gray-600']}
                    iconNames={['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets']}
                    linkRepo='https://github.com/edusebass/APP-REACT-MESSAGES'
                    linkWeb='https://app-react-messages-production.up.railway.app/'
                />
                <Card 
                    img={imgSimon} 
                    titulo='SIMON DICEE WEBSITE' 
                    fecha='Julio 2023'
                    descripcion='Videojuego sobre mem<orización interactiva.'
                    icons={icons1}
                    iconColors={iconColors}
                    iconNames={iconNames}
                    linkRepo='https://github.com/edusebass/SIMONDICEE-WEBSITE'
                    linkWeb='https://edusebass.github.io/SIMONDICEE-WEBSITE/'
                />
                <Card 
                    img={imgDicee} 
                    titulo='Dados Game WEBSITE' 
                    fecha='Julio 2023'
                    descripcion='Juego que permite lanza dados al azar.'
                    icons={icons1}
                    iconColors={iconColors}
                    iconNames={iconNames}
                    linkRepo='https://github.com/edusebass/DICEE-website'
                    linkWeb='https://edusebass.github.io/DICEE-website/'
                />
                <Card 
                    img={projectc} 
                    titulo='APP Control de Inventario' 
                    fecha='Marzo 2023'
                    descripcion='Programa para control de inventarios de productos, y CRUD de administradores y clientes.'
                    icons={[BiLogoCPlusPlus]}
                    iconColors={["blue-600"]}
                    iconNames={["C++"]}
                    linkRepo='https://github.com/edusebass/import-project-cplusplus'
                    linkWeb=''
                />
                <Card 
                    img={javacrud} 
                    titulo='APP Control de Inventario' 
                    fecha='Agosto 2023'
                    descripcion='Calculadora swing Java con todas las características de una calculadora trigonométrica normal.'
                    icons={[BiLogoJava]}
                    iconColors={["orange-600"]}
                    iconNames={["Java"]}
                    linkRepo='https://github.com/edusebass/PruebaPOOSQL'
                />
                <Card 
                    img={detectot} 
                    titulo='Detector de rostros' 
                    fecha='Agosto 2023'
                    descripcion='App con python que detecta todo tipo de rostros.'
                    icons={[BiLogoPython]}
                    iconColors={["blue-400"]}
                    iconNames={["Python"]}
                    linkRepo='https://github.com/edusebass/Detector-de-caraas-con-Python'
                />
                <Card 
                    img={apipokemon}
                    titulo='ApiPokemon Cartas'
                    fecha='Agosto 2023'
                    descripcion='Pagina web que trae elementos de una api de pokemon y cada vez que recargas puedes ver nuevas cartas de pokemon.'
                    icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript]}
                    iconColors={['orange-600', 'blue-500', 'yellow-400']}
                    iconNames={['HTML5', 'CSS3', 'JavaScript']}
                    linkRepo='https://github.com/edusebass/ApiPokemon'
                    linkWeb='https://edusebass.github.io/ApiPokemon/'
                />
                <Card 
                    img={calculador} 
                    titulo='App Calculadora Java' 
                    fecha='Julio 2023'
                    descripcion='Calculadora swing Java con todas las características de una calculadora trigonométrica normal.'
                    icons={[BiLogoJava]}
                    iconColors={["orange-600"]}
                    iconNames={["Java"]}
                    linkRepo='https://github.com/edusebass/javaxCalculadora'
                />
                <Card 
                    img={appfarmacia} 
                    titulo='App Gestion Farmacia' 
                    fecha='Septiembre 2023'
                    descripcion='App que gestiona productos, ventas por caja y administracion el stock de productos y personas.
                    Gestiona ventas y devuelve facturas de las compras y reportes.'
                    icons={[BiLogoJava, SiMysql]}
                    iconColors={["orange-600", 'sky-700']}
                    iconNames={["Java", 'MySQL']}
                    linkRepo='https://github.com/bryandelgado99/Proyecto-Farmacia--2do-Bimestre'
                    linkWeb='https://www.youtube.com/watch?v=QCb2bVLnhnM'
                />
                <Card 
                    img={tolist} 
                    titulo='TodoList' 
                    fecha='Septiembre 2023'
                    descripcion='Proyecto de grupo. Aplicación web de gestión de tareas, con funcionalidad CRUD.'
                    icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript]}
                    iconColors={['orange-600', 'blue-500', 'yellow-400']}
                    iconNames={['HTML5', 'CSS3', 'JavaScript']}
                    linkRepo='https://github.com/brittanypallasco2003/Organizador'
                />
                <Card 
                    img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1697490315/Portfolio/portfolio_taknef.png"
                    titulo='Portafolio Personal'
                    fecha='Octubre 2023'
                    descripcion='Portafolio personal en donde se muestra todo los proyectos que realizado e informacion sobre mi.'
                    icons={[BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, TbBrandVite]}
                    iconColors={["orange-600", "sky-500", "sky-700", "blue-600", "yellow-600"]}
                    iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite"]}
                    linkRepo='https://github.com/edusebass/Portfoliox'
                />
                <Card 
                    img="https://res.cloudinary.com/dwowtb0ya/image/upload/v1697585921/Portfolio/genreator_name_mfpdkr.png"
                    titulo='Generator Name'
                    fecha='Octubre 2023'
                    descripcion='WebPage hecha con backend para generar nombres aleatorios'
                    icons={[BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoNodejs, SiExpress, AiOutlinePercentage]}
                    iconColors={['orange-600', 'blue-500', 'yellow-400', 'green-500', 'black', 'red-500']}
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
                    iconColors={['orange-600', 'blue-500', 'yellow-400', 'green-500', 'black', 'red-500']}
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
                    iconColors={['orange-600', 'blue-500', 'yellow-400', 'green-500', 'black', 'red-500', 'gray-500']}
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
                    iconColors={["orange-600", "sky-500", "sky-700", "blue-600", "yellow-600", "yellow-500"]}
                    iconNames={["HTML5", "React", "Tailwind CSS", "TypeScript", "Vite", "Firebase"]}
                    linkRepo='https://github.com/edusebass/React'
                    linkWeb='https://apiperson.vercel.app/'
                />
            </section>      
        </>
    )
}

export default Project;