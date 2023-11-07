

import {FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa";

const footer = () => {
  return (
      <>
        {/* <div className="flex items-center justify-center p-12">
          <h2 className="flex text-center justify-center pb-10 text-6xl font-extrabold text-yellow-500">Contáctame</h2>
          <div className="mx-auto w-full max-w-[550px]">
            <form  method="POST">
              <div className="mb-5">
                <label
                  
                  className="mb-3 block text-base font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ingrese su nombre"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  
                  className="mb-3 block text-base font-medium text-white"
                >
                  Email 
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@hotmail.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                
                  className="mb-3 block text-base font-medium text-white"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Ingresa el asunto"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  
                  className="mb-3 block text-base font-medium text-white"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Escribe tu mensaje..."
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  className="hover:shadow-form rounded-md bg-yellow-500 py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div> */}
      <footer className=" bg-black text-center text-white pt-9 flex flex-col sm:flex-row" id="footer">
        <span className="font-semibold tracking-tight text-4xl sm:ml-24 sm:mt-14">EA</span>
        <div className="px-6 pt-6 sm:ml-16 mx-auto">
          <div className="mb-6 flex justify-center w-full">
            <a
                href="https://mail.google.com/mail/?view=cm&to=edu03sebas@gmail.com"
                target="_blank"
                type="button"
                className="mx-1  text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-red-400 hover:bg-white mt-4 sm:mt-0 sm:inline-block sm:ease-in duration-300"
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
            <a href="https://github.com/edusebass" target="blank" className="mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-black hover:bg-white mt-4 sm:mt-0 sm:inline-block sm:ease-in duration-300">
                <FaGithub className=" text-2xl"/>                        
            </a>
            <a href="https://www.linkedin.com/in/eduardo-almachi-727730238/" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent  hover:text-blue-800 hover:bg-white mt-4 sm:mt-0  sm:inline-block sm:sm:ease-in duration-300`}>
                <FaLinkedin className=" text-2xl"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=593986572316" target="blank" className={`mx-1 text-sm px-2 py-2 leading-none border rounded-full border-neutral-500 hover:border-transparent hover:text-green-600 hover:bg-white mt-4 sm:mt-0  sm:inline-block sm:sm:ease-in duration-300`}>
                <FaWhatsapp className=" text-2xl"/>
            </a> 
          </div>
          <div className="mb-6">
            <p>
            Si te gustó lo que viste, no dudes en contactarme.
            </p>
          </div>
        </div>
        <div className="text-center ml-12 sm:flex-grow">
          <a href="#intro" className=" block mt-0 sm:mt-0 text-black-300 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case" >
              Home
          </a>
          <a href="#skills" className=" block mt-4  sm:mt-3 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
              Skills
          </a>
          <a href="#projects" className=" block mt-4  sm:mt-3 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
              Projects
          </a>
          <a href="#aboutme" className=" block mt-4 sm:mt-3 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
              About me
          </a>
          <a href="#footer" className=" block mt-4 sm:mt-3 sm:mb-6 text-black-200 hover:font-semibold hover:underline mr-14 uppercase sm:normal-case">
              Contact
          </a>
        </div>
        <div className="p-4 text-center sm:pt-32">
            © 2023 Copyright: Creado con 💓 by Eduardo Almachi
        </div>
      </footer>
    </>
  );
}

export default footer;

