import React from "react";

const SecHeroSection = () => {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 bg-gradient-to-b from-white to-[#e0f7f4] overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif italic font-bold text-[#006d5b]">
          Our brands, your trust
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          A household name for decades gone, decades to come.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Sidebar: Product Categories */}
        <div className="flex flex-col gap-8 w-full md:w-1/6 items-center md:items-start">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-2 border-b-4 border-[#009087]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png"
                alt="Water"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xs font-bold text-center text-[#006d5b]">
              AQUA Packaged <br /> Drinking Water
            </p>
          </div>

          <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/824/824239.png"
                alt="Spring"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xs font-semibold text-center text-gray-700">
              Natural <br /> Spring Water
            </p>
          </div>

          <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition cursor-pointer">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2405/2405479.png"
                alt="Soft Drinks"
                className="w-10 h-10"
              />
            </div>
            <p className="text-xs font-semibold text-center text-gray-700">
              Carbonated <br /> Soft Drinks
            </p>
          </div>
        </div>

        {/* Center/Right Content Area */}
        <div className="relative flex-grow flex flex-col md:flex-row items-center">
          {/* Main Branded Image (The Model/Bottle) */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center translate-x-4 md:translate-x-10">
            <img
              src="https://img.freepik.com/premium-photo/3d-cartoon-water-bottle-white-background_980928-2718.jpg"
              alt="Brand Ambassador"
              className="w-full max-w-md rounded-lg"
            />
            {/* Overlaying Large Jar */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png"
              alt="Water Jar"
              className="absolute bottom-[-20px] right-0 w-40 md:w-60 drop-shadow-2xl"
            />
          </div>

          {/* Right Info Card */}
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl w-full md:w-3/5 -mt-10 md:mt-0 md:-ml-20 pt-20 md:pt-16 z-0">
            <div className="max-w-md ml-auto">
              <h4 className="text-gray-500 font-semibold uppercase text-xs tracking-widest mb-4">
                AQUA Packaged Drinking Water
              </h4>
              <h3 className="text-2xl font-bold text-[#006d5b] mb-4">
                Quality you can trust in every drop
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our water is defined by its promise of purity, safety, and
                consistency. Every bottle undergoes a stringent{" "}
                <strong>10-Step Purification Process</strong>
                and <strong>90 Quality Tests</strong> to ensure you get nothing
                but the best.
              </p>
              <button className="text-[#009087] font-bold border-b-2 border-[#009087] pb-1 hover:text-[#006d5b] transition">
                Learn more
              </button>

              <div className="mt-10 pt-10 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                  An AQUA for every need and every occasion
                </h3>
                <button className="text-[#009087] font-bold border-b-2 border-[#009087] pb-1">
                  Shop AQUA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecHeroSection;
