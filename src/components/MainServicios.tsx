import Servicios from './Servicios'
import AnimatedText from "./AnimatedText";

const MainServicios = () => {
    return (
        <>
            <div className='flex m-10'>
                <div className="px-10"
                    id='container'
                    >
                    <div id='mover'>
                        <AnimatedText
                        text="Servicios"
                        className="text-5xl text-yellow-400 font-bold mb-6 text-center sm:text-left"
                        stylesWords="hover:text-white"
                        fromTop
                        />
                        <AnimatedText
                        text="A continuación, puedes observar los principales servicios que ofrezco como profesional."
                        className="text-center sm:text-left text-xl text-white"
                        stylesWords="hover:text-white"
                        fromTop
                        />
                    </div>
                </div>
                <Servicios/>
            </div>
        </>
    )
}

export default MainServicios