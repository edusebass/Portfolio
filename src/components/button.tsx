import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => {
  return (
    <div className="">
        <a href={href} target='_blank'>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex sm:inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-100">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>{children}</span>
          </button>
        </a>
    </div>
  );
};

export default Button;
