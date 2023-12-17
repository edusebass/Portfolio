import AnimatedDiv from './AnimatedDiv'

interface Props {
    lugar: string,
    fecha: string,
    cargo: string,
    opcion1?: string,
    opcion2?: string,
    opcion3?: string,
    opcion4?: string,
    linkProyecto?: string,
    proyectoVisibles?: string
}

const ExperienciaCard = ({lugar, fecha, cargo, opcion1, opcion2, opcion3, opcion4, linkProyecto, proyectoVisibles}: Props) => { 
    return (
        <>
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center ">
            
            <AnimatedDiv x={0.5} y={50}>
                
            <div className=" flex min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">    
                <div className="px-4 py-5 flex-auto">
                    <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699380013/Portfolio/computer-svgrepo-com_qmbbtn.svg"
                    className="h-20 m-auto" />
                    <h3 className=" text-3xl font-semibold">{lugar}</h3>
                    <h3 className=" text-xl font-semibold">{fecha}</h3>
                    <h3 className=" text-lg">Cargo ocupado: {cargo}</h3>
                    <p className="text-left mt-2">
                        <ol>
                            <li>- {opcion1}</li>
                            <li>- {opcion2}</li>
                            <li>- {opcion3}</li>
                            <li>- {opcion4}</li>
                        </ol>
                    </p>
                    <h3 className={`text-lg mt-2 ${proyectoVisibles}`}>Proyecto</h3>
                    <p className="text-left">
                        <a href={linkProyecto}>{linkProyecto}</a>
                    </p>
                </div>
            </div>
            </AnimatedDiv>
        </div>
            
        </>
    )
}

export default ExperienciaCard