

const ProgressBar = ({ percent }: ProgressBar) => {
  return (
    <div className="border border-gray-300 rounded overflow-hidden mt-5">
      <div
        className=" text-white text-center text-sm "
      >
        {percent}%
      </div>
    </div>
  );
};

export default ProgressBar;
