const Experiencia = () => {
    return (
        <> 
                <h2 className="text-yellow-400 font-extrabold text-center pb-8 text-5xl mt-28 " id='experiencia'>EXPERIENCIA LABORAL</h2>
                <h6 className='text-yellow-400 font-extrabold text-center pb-8 mx-10 sm:mx-0'>Lista de experiencia profesional y descripcion
                detallada de cada uno de ellos</h6>
                <div className="flex justify-center">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                    <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div className="px-4 py-5 flex-auto">
                            <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699380013/Portfolio/computer-svgrepo-com_qmbbtn.svg"
                            className="h-20 m-auto" />
                            <h3 className=" text-3xl font-semibold">Tecniservicios</h3>
                            <h3 className=" text-xl font-semibold">De Agosto 2022 - Octubre 2022</h3>
                            <h3 className=" text-lg">Cargo ocupado: Tecnico informático</h3>
                            <p className="text-left mt-2">
                                <ol>
                                    <li>- Mantenimiento y correctivo de computadoras e impresoras.</li>
                                    <li>- Optimizacion de aplicativos web.</li>
                                    <li>- Asesoria de sistemas informaticos.</li>
                                    <li>- Creacion de landing page para ventas.</li>
                                </ol>
                            </p>
                            <h3 className="text-lg mt-2">Proyecto</h3>
                            <p className="text-left">
                                Landing page: <a href="llantas.vercel.app">llantas.vercel.app</a>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiencia