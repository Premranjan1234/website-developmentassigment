import { Link } from "react-router-dom";
import "../App.css";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 py-16 px-6 text-center flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-indigo-400 opacity-30 rounded-full blur-2xl animate-spin-slow" />
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-purple-300 opacity-10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight drop-shadow-lg animate-fade-up-loop">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Innovating
          </span>{" "}
          Solutions for Tomorrow
        </h2>

        <p className="text-indigo-600 text-base sm:text-lg font-semibold mb-2 animate-pulse-text-loop">
          Shaping the future with intelligent software
        </p>

        <p className="text-gray-700 text-md sm:text-xl mb-10 px-4 animate-fade-up-loop">
          Empowering businesses with cutting-edge technology and
          forward-thinking strategies.
        </p>

        <Link to="/about">
          <button className="cursor-pointer relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-10 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 rounded-full border-2 border-white/100 animate-ping"></span>
          </button>
        </Link>
      </div>
    </section>
  );
}
