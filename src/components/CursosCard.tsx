// import { CiShare1 } from "react-icons/ci";

interface Props {
    imgCurso: string;
    tituloCursos: string;
}

const CursosCard = ({tituloCursos}: Props) => {  
    return (
        <>
            <div className="bg-slate-200 h-24 w-60 p-4 flex shadow-lg items-center justify-center rounded-2xl">
                <h1>{tituloCursos}</h1>
                
                {/* <CiShare1  /> */}
                
            </div>
        </>
    )
}

export default CursosCard