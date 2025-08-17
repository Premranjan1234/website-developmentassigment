import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        .fade-slide-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-slide-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-spin-slower {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-opacity {
          animation: pulse-opacity 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative w-full bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-50 py-24 px-6 flex flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-purple-300 rounded-full blur-3xl animate-pulse-opacity" />
        <div className="absolute bottom-[-100px] right-[-60px] w-96 h-96 bg-blue-300 rounded-full blur-2xl animate-spin-slower" />

        <div className="relative z-10 max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-md fade-slide-up ${
              visible ? "show" : ""
            }`}
          >
            About <span className="text-indigo-600">ACGIL</span>
          </h1>

          <p
            className={`text-gray-700 text-lg mb-8 px-2 sm:px-6 leading-relaxed fade-slide-up ${
              visible ? "show" : ""
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            We are a technology-driven company dedicated to delivering
            innovative software solutions and digital experiences that drive
            success for businesses of all sizes. With a focus on excellence,
            adaptability, and customer satisfaction, we continuously push the
            boundaries of what’s possible.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-left text-gray-600 mt-8">
            <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-1/2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="font-semibold text-indigo-600 mb-2 text-lg">
                Our Mission
              </h3>
              <p className="text-sm">
                To empower clients by developing innovative and effective
                solutions through the latest technologies and best practices.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-1/2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="font-semibold text-indigo-600 mb-2 text-lg">
                Our Vision
              </h3>
              <p className="text-sm">
                To be a global leader in software and IT services, known for
                integrity, innovation, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
