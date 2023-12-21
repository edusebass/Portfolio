import AnimatedDiv from './AnimatedDiv'

const CardServicios = ({imgIcon, titulo, descripcion}:ServicioCard) => { 
    return (
        <>
            {/* servicio */}
            <AnimatedDiv delay={0.5} y={50}>
                        <div className="bg-white text-black p-5 flex items-center justify-center shadow-md rounded-3xl h-full sm:m-0 my-10 mx-5">
                            <div className="service">
                                <div className="w-16 m-auto flex">
                                    <img src={imgIcon} alt="Prototipo"/>
                                </div>
                                <h3 className="text-xl text-center font-bold my-2">{titulo}</h3>
                                <div className="horizontal-line-wrap">
                                    <span className="bg-yellow-500 h-1 block h-23"></span>
                                </div>
                                <p className="mt-2 text-sm">{descripcion}</p>
                            </div>
                        </div>
                    </AnimatedDiv>
        </>
    )
}

export default CardServicios