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
    href: string;
    icon: ReactElement;
}