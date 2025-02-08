import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 rounded-full relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
