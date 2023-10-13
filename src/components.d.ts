interface Card{
    img: string,
    titulo: string,
    fecha: string,
    descripcion: string,
    icons: IconType[],
    iconColors: string[],
    iconNames: string[],
    linkRepo: string,
    linkWeb?: string
}

interface ButtonProps {
    descripButton: string
    href?: string;
    icon: ReactElement;
}