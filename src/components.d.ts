interface Card{
    img: string,
    titulo: string,
    fecha: string,
    descripcion: string,
    icons: IconType[],
    iconColors: string[],
    iconNames: string[],
    linkRepo: string,
    iconButton: ReactElement
}

interface ButtonProps {
    descripButton: string
    href: string;
    icon: ReactElement;
}