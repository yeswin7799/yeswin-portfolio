import React from 'react';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-start px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/IMG-20240703-WA0010.jpg')" }}
    >
      <div className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50/90 backdrop-blur-md p-8 rounded-lg shadow-md max-w-xl">
        <h1 className="text-4xl font-bold mb-4 text-rose-800">
          Hi, I'm Yeswin Chintapalli
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          A passionate Software Developer & Computer Science Graduate Student at Purdue University Fort Wayne.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition"
          >
            View Projects
          </a>
          <a
            href="/Yeswin_Resume.pdf"
            download
            className="px-6 py-2 border border-rose-600 text-rose-600 rounded hover:bg-rose-50 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
