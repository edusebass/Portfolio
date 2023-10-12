const Button = ({href, icon, descripButton }: ButtonProps) => {
  return (
    <div className="p-1">
        <a href={href} target='_blank'>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex sm:inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-100">
            <span className="fill-current w-4 h-4 mr-2 text-black text-xl">
              {icon}
            </span>
            <span>{descripButton}</span>
          </button>
        </a>
    </div>
  );
};

export default Button;
