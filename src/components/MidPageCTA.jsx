import { Link } from "react-router-dom";

export default function MidPageCTA() {
  return (
    <>
      <style>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 6px rgba(255, 255, 100, 0.8), 0 0 12px rgba(255, 255, 150, 0.6);
          }
          50% {
            text-shadow: 0 0 12px rgba(255, 255, 150, 1), 0 0 24px rgba(255, 255, 200, 0.9);
          }
        }

        @keyframes float-up-down {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }

        .animate-float-up-down {
          animation: float-up-down 2s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }

        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.15; }
        }

        .animate-pulse-opacity {
          animation: pulse-opacity 6s ease-in-out infinite;
        }
      `}</style>

      <section className="relative bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-700 text-white py-24 px-6 text-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-20 -left-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-opacity"></div>
        <div className="absolute -bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-spin-slow"></div>

        {/* Main content with floating animation */}
        <div className="relative z-10 max-w-4xl mx-auto animate-float-up-down">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-md">
            Let’s <span className="text-yellow-300 animate-glow">Build</span>{" "}
            Something Great Together
          </h2>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses already transforming their ideas into
            reality with us.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-300 text-blue-900 font-bold px-10 py-3 rounded-full shadow-xl hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
