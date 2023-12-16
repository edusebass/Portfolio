import AnimatedText from "./AnimatedText";
import CursosCard from "./CursosCard";
const Cursos = () => { 
    return (
        <>
            <div className="px-4 mx-auto max-w-7xl text-center">
                <AnimatedText
                    text="Cursos"
                    className="text-5xl text-yellow-400 font-bold text-center sm:text-left"
                    stylesWords="hover:text-white"
                    fromTop
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" className="w-36 rounded-xl mt-4"/>
                <div className=" grid items-center max-w-6xl grid-cols-1 sm:grid-cols-2 gap-4 mx-auto mt-6 md:grid-cols-4  ">
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Python sin fronteras: HTML, CSS, Flask y MySQL"
                    />
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS"
                    />
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="The Complete 2023 Web Development Bootcamp"
                    />
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Curso de React.js con TypeScript"
                    />
                </div>
                <div>
                    <br />
                    <br />
                </div>

                <img src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg" className="w-36 h-auto rounded-xl mt-4"/>
                <div className=" grid items-center max-w-6xl grid-cols-2 gap-4 mx-auto mt-6 md:grid-cols-4">
                    <CursosCard 
                        imgCurso=""
                        tituloCursos="Curso de React.js con TypeScript"
                    />
                    
                </div>
                <div>
                    asdfsd <br />
                    <br />
                </div>
            </div>
            
        </>
    )
}

export default Cursos