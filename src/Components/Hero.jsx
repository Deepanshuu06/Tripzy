import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="w-full h-screen flex flex-col justify-center items-center text-white bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://wallpapers.com/images/high/travel-hd-r83t2bgv5feu88zb.webp)",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Discover India One Journey at a Time!
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-2xl">
            Experience the magic of ancient traditions, diverse cultures, and
            breathtaking landscapes across the incredible subcontinent.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Start Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
