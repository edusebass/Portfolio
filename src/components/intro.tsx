import { useState, useEffect } from 'react';
import { BiDownload } from 'react-icons/bi';
import Button from './button';
import imgPerfil from '../../public/img/fotocarnet.jpg';
import CV from '../../public/docs/EduardoAlmachiCV.pdf';
import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa";


const Intro = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const introText = "Hi, I´m Eduardo Almachi 👋";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(introText.substring(0, index));
      setIndex(index => index + 1);
    }, 50);

    setIsAnimated(true);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className='`flex px-1 py-5 sm:px-52 sm:py-40 text-white w-full h-screen' id='intro'>
      <div className='sm:flex'>
        <img src={imgPerfil} className='ml-20 max-h-44 sm:my-12 sm:block sm:h-auto sm:max-h-60 rounded-3xl' />
        <div className='px-7 pt-7 sm:px-20'>
          <span className="font-mono whitespace-no-wrap border-r-4 border-solid ">{text}</span>
          <h2 className='text-5xl font-extrabold text-yellow-400 sm:text-7xl'>Software Developer</h2>
          <p className='py-2 text-slate-400 pb-4'>Entusiasta de la tecnología dedicado con una curiosidad insaciable por desentrañar las complejidades de nuestro mundo digital.</p>
          <Button icon={<BiDownload/>} href={CV} descripButton='Download CV'></Button>
          <div className='pt-5 text-white flex flex-row sm:hidden' id="informacion">
              <a
                      href="https://mail.google.com/mail/?view=cm&to=edu03sebas@gmail.com"
                      target="_blank"
                      type="button"
                      className="mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-red-400 hover:bg-white mt-4 sm:mt-0 sm:inline-block sm:ease-in duration-300"
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto h-full w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                              d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                              fillRule="evenodd"
                              clipRule="evenodd" />
                      </svg>
                  </a>
              <a href="https://github.com/edusebass" target="blank" className="mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-black hover:bg-white mt-4 sm:mt-0  sm:ease-in duration-300">
                  <FaGithub className=" text-2xl"/>                        
              </a>
              <a href="https://www.linkedin.com/in/eduardo-almachi-727730238/" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent  hover:text-blue-800 hover:bg-white mt-4 sm:mt-0  sm:sm:ease-in duration-300`}>
                  <FaLinkedin className=" text-2xl"/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=593986572316" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-green-600 hover:bg-white mt-4 sm:mt-0  sm:sm:ease-in duration-300`}>
                  <FaWhatsapp className=" text-2xl"/>
              </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
