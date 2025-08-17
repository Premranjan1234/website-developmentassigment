import { Link } from "react-router-dom";

export default function SolutionsSection() {
  const solutions = [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design Services",
    "API Development & Integration",
    "Custom Software Solutions",
    "SaaS Product Engineering",
    "DevOps & Cloud Infrastructure",
    "Quality Assurance & Testing",
    "Maintenance & Support",
    "Software Consulting Services",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <h3 className="text-sm text-teal-600 font-semibold uppercase mb-2">
            What We Offer
          </h3>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            End-to-End Software Development Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            From idea to deployment and beyond, we deliver scalable, secure, and
            user-friendly digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-white rounded-lg border border-gray-200 px-4 py-2 text-gray-800 font-medium shadow-sm transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-teal-500 to-teal-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              </div>
            ))}
          </div>

          <div className="flex justify-center animate-slide-in">
            <img
              src="https://media.istockphoto.com/id/2168922157/photo/partnership-and-collaboration-in-office-group-discussion-for-feedback.webp?a=1&b=1&s=612x612&w=0&k=20&c=J8bnSbqkyViFy7S99_XkemYX-d_FruNwYjTsUlW-8zY="
              alt="Software Development"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>

        <Link to="/services">
          <div className="mt-10 text-center animate-fade-in">
            <a
              href="#"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            >
              → Learn More
            </a>
          </div>
        </Link>
      </div>
    </section>
  );
}
