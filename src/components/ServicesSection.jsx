const services = [
  {
    icon: "💼",
    title: "Consulting",
    desc: "Expert guidance for your tech journey.",
  },
  {
    icon: "⚙️",
    title: "Custom Development",
    desc: "Tailored software solutions.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Protecting your digital assets.",
  },
  {
    icon: "☁️",
    title: "Cloud Services",
    desc: "Scalable and reliable cloud solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div
            key={i}
            className={`relative bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 transform animate-slide-in`}
            style={{ animationDelay: `${i * 0.3}s` }} // Stagger animation start times
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:rotate-6">
              {s.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slide-in {
          0% {
            opacity: 0.8; /* Start with low opacity */
            transform: translateY(20px);
          }
          50% {
            opacity: 1.5; /* Full opacity */
            transform: translateY(0);
          }
          100% {
            opacity: 5; /* End with low opacity */
            transform: translateY(20px);
          }
        }
        .animate-slide-in {
          animation: slide-in 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
