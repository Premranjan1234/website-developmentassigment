import { useEffect, useState } from "react";

export default function Products() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <style>{`
        .zoom-fade {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .zoom-fade.show {
          opacity: 1;
          transform: scale(1);
        }

        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }

        .animate-pulse-opacity {
          animation: pulse-opacity 6s ease-in-out infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      <section className="relative w-full bg-gradient-to-br from-purple-50 via-indigo-100 to-blue-50 py-24 px-6 flex flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-indigo-300 rounded-full blur-3xl animate-pulse-opacity pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-60px] w-96 h-96 bg-purple-400 rounded-full blur-2xl animate-spin-slow pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 drop-shadow-md">
            Explore Our <span className="text-purple-600">Products</span>
          </h1>
          <p className="text-gray-700 text-lg mb-12 px-2 sm:px-6 leading-relaxed">
            Discover a range of high-quality, scalable, and reliable software
            products tailored to meet your business needs. We combine
            functionality, innovation, and design to help you achieve more.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CRM Suite",
                desc: "A powerful CRM system to manage your customer relationships and sales pipeline.",
              },
              {
                title: "Inventory Manager",
                desc: "Track, manage, and optimize your inventory with real-time insights and automation.",
              },
              {
                title: "HRMS Platform",
                desc: "Streamline your HR processes from hiring to payroll with our easy-to-use HRMS.",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-left zoom-fade ${
                  show ? "show" : ""
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <h3 className="font-semibold text-indigo-600 mb-2 text-lg">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
