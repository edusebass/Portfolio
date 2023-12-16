const ExperienciaCard = () => { 
    return (
        <>
            <div className="px-4 py-5 flex-auto">
                <img src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1699380013/Portfolio/computer-svgrepo-com_qmbbtn.svg"
                className="h-20 m-auto" />
                <h3 className=" text-3xl font-semibold">Tecniservicios</h3>
                <h3 className=" text-xl font-semibold">De Agosto 20223- Octubre 2022</h3>
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
            
        </>
    )
}

export default ExperienciaCard