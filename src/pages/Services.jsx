import { useEffect, useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Consulting",
      desc: "Expert guidance to streamline your digital journey.",
      icon: "💼",
    },
    {
      title: "Custom Development",
      desc: "Tailor-made software crafted for your unique needs.",
      icon: "🛠️",
    },
    {
      title: "Cybersecurity",
      desc: "Secure your assets with our advanced protection.",
      icon: "🔒",
    },
    {
      title: "Cloud Services",
      desc: "Scalable, reliable cloud solutions built to grow.",
      icon: "☁️",
    },
  ];

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
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-slide-up.show {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        .animate-pulse-opacity {
          animation: pulse-opacity 5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-24 px-6 overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse-opacity pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-indigo-400 rounded-full blur-2xl animate-spin-slow pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 drop-shadow">
            Our <span className="text-indigo-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover how we empower businesses with technology-driven solutions
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-left fade-slide-up ${
                  visible ? "show" : ""
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
