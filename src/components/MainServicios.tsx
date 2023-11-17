import Servicios from './Servicios'
import { useEffect, useState} from 'react'

import AnimatedText from "./AnimatedText";

const MainServicios = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  const [moverHeight, setMoverHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleScroll = () => {
    const newPosition = window.scrollY;
    const bottomMover = newPosition + moverHeight;
    const bottomContainer = containerHeight;

    if (bottomMover <= bottomContainer) {
      setScrollPosition(newPosition);
    } else {
      setScrollPosition(bottomContainer - moverHeight);
    }
  };

  useEffect(() => {
    const moverElement = document.getElementById('mover');
    const containerElement = document.getElementById('container');

    const updateHeights = () => {
      if (moverElement) {
        setMoverHeight(moverElement.clientHeight);
      }

      if (containerElement) {
        setContainerHeight(containerElement.clientHeight);
      }
    };

    // Actualizar alturas al montar el componente
    updateHeights();

    // Establecer el listener para el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Actualizar alturas al redimensionar la ventana
    window.addEventListener('resize', updateHeights);

    // Limpiar listeners al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeights);
    };
  }, [moverHeight, containerHeight]);

  const translateY = `translateY(${scrollPosition}px)`;
  console.log(`translateY: ${translateY}`);

    return (
        <>
            <div className='flex m-10'>
                <div className="px-10"
                    style={{
                    position:'relative',
                    top: `${scrollPosition}px`,
                    }}
                    id='container'
                    >
                    <div className={`transform ${translateY} transition-transform`} id='mover'>
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