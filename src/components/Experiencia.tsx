import ExperienciaCard from './ExperienciaCard'
import AnimatedText from './AnimatedText'

const Experiencia = () => {
    return (
        <> 
            <AnimatedText 
                text='EXPERIENCIA LABORAL'
                className='text-yellow-400 font-extrabold text-center pb-8 text-5xl mt-28'
                fromTop
                stylesWords="hover:text-white"
            />
            <AnimatedText 
                text='Lista de experiencia profesional y descripcion
                detallada de cada uno de ellos'
                className='text-yellow-400 font-extrabold text-center pb-8 mx-10 sm:mx-0'
                fromTop
                stylesWords="hover:text-white"
            />
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center">
                
                    <ExperienciaCard 
                        cargo='Tecnico informático'
                        fecha='De Agosto 2022 - Octubre 2022'
                        lugar='Tecniservicios'
                        opcion1='Mantenimiento y correctivo de computadoras e impresoras.'
                        opcion2='Optimizacion de aplicativos web.'
                        opcion3='Asesoria de sistemas informaticos.'
                        opcion4='Creacion de landing page para ventas.'
                        linkProyecto='https://llantas.vercel.app/'
                    />
                    <ExperienciaCard 
                        cargo='Desarrollador FullStack'
                        fecha='De Noviembre 2023 - Actualidad'
                        lugar='NiceCode'
                        opcion1='Demostré habilidades sólidas de resolución de problemas.'
                        opcion2='Identificación y reescritura de algoritmos para mejorar la eficiencia temporal y reducir la complejidad.'
                        opcion3='Implementación de scripts y herramientas personalizadas para automatizar procesos repetitivos.'
                        opcion4='Creacion de componentes en React y manejo de backend.'
                        proyectoVisibles='hidden'
                    />
            </div>
        </>
    )
}

export default Experiencia