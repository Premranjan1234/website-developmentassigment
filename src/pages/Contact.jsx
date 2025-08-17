import { useEffect, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-pulse-opacity {
          animation: pulse-opacity 6s ease-in-out infinite;
        }

        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      <section className="relative w-full bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 py-20 px-6 flex flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-pulse-opacity pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-60px] w-96 h-96 bg-purple-400 rounded-full blur-2xl animate-spin-slow pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-lg">
            Get in <span className="text-indigo-600">Touch</span> With Us
          </h1>
          <p className="text-gray-700 text-lg mb-8 px-2 sm:px-6">
            We'd love to hear from you. Whether you have a question or just want
            to say hello, our team is ready to help.
          </p>

          <form
            className={`bg-white p-6 rounded-xl shadow-md max-w-md mx-auto space-y-4 fade-up ${
              visible ? "show" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
