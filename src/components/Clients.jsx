import { useRef, useEffect } from "react";

const services = [
  {
    icon: "💼",
    title: "PureElegance Design",
    desc: "Expert guidance for your tech journey.",
  },
  {
    icon: "⚙️",
    title: "ZenNest Interiors",
    desc: "Tailored software solutions.",
  },
  {
    icon: "🔒",
    title: "SimpleSolutions Co.",
    desc: "Protecting your digital assets.",
  },
  {
    icon: "☁️",
    title: "ModaLine Clothing",
    desc: "Scalable and reliable cloud solutions.",
  },
  {
    icon: "📈",
    title: "CleanCanvas Art",
    desc: "Data-driven insights for better decisions.",
  },
  {
    icon: "🧠",
    title: "SereneTech Solutions",
    desc: "Empowering with intelligent systems.",
  },
  {
    icon: "📱",
    title: "BlankSlate Creative",
    desc: "Mobile-first, user-friendly apps.",
  },
  {
    icon: "🛠️",
    title: "MinimalMarketplace",
    desc: "Ongoing support and improvements.",
  },
];

export default function ClientsSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = slider.offsetWidth * 0.4; // approx. 1.5–2 cards per scroll

    const interval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollTo({ left: 0, behavior: "auto" }); // snap back instantly
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="w-full max-w-7xl mx-auto px-4 py-20 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our Clients
        </h2>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto hide-scrollbar space-x-4 snap-x snap-mandatory scroll-smooth"
        >
          {[...services, ...services].map((s, i) => (
            <div
              key={i}
              className="snap-center flex-[0_0_auto] bg-white/90 backdrop-blur p-6 rounded-xl shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105
              w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw] xl:w-[18vw] max-w-full"
            >
              <div className="text-5xl mb-4 text-center">{s.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800 mb-2 text-center">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
