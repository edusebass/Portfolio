import { useState, useEffect } from 'react';
import { BiDownload } from 'react-icons/bi';
import Button from './button';
import imgPerfil from '../../public/img/fotocarnet.jpg';
import CV from '../../public/docs/EduardoAlmachiCV.pdf';

const Intro = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const introText = "Hi, I´m Eduardo Almachi 👋";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(introText.substring(0, index));
      setIndex(index => index + 1);
    }, 50);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className='flex px-1 py-5 sm:px-52 sm:py-40 text-white w-full h-full' id='intro'>
      <div className='flex'>
        <img src={imgPerfil} className='my-12 hidden sm:block sm:h-auto sm:max-h-60 rounded-3xl' />
        <div className='px-7 pt-7 sm:px-20'>
          <span className="font-mono whitespace-no-wrap border-r-4 border-solid ">{text}</span>
          <h2 className='text-5xl font-extrabold text-yellow-400 sm:text-7xl'>Software Developer</h2>
          <p className='py-2 text-slate-400 pb-4'>Entusiasta de la tecnología dedicado con una curiosidad insaciable por desentrañar las complejidades de nuestro mundo digital.</p>
          <Button icon={<BiDownload/>} href={CV} descripButton='Download CV'></Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
