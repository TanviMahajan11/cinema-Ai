import React from "react";

const ViedoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute bg-gradient-to-r from-black aspect-video w-screen pt-[10%] pl-15 md:pt-[5%]">
      <h1 className="pt-36 px-10 text-5xl font-bold text-white md:text-3xl">{title}</h1>
      <p className="px-10 py-5 text-md md:w-4/12 text-white sm:text-sm md:text-sm">{overview}</p>
      <div className="px-10">
        <button className=" text-black bg-white text-lg px-10 py-4 rounded-md hover:bg-opacity-80 visible md:invisible lg:visible">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-400 text-lg px-8 py-4 b mx-5 rounded-md hover:bg-opacity-80 visible md:invisible lg:visible">
          ！More Info
        </button>
      </div>
    </div>
  );
};

export default ViedoTitle;
