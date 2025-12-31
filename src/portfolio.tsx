import { useState } from "react";
import { FaBars, FaTimes, FaChevronRight, FaHeart } from "react-icons/fa";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-[Poppins]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-xl font-bold uppercase text-blue-600">
            portfolio
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6">
            {["home", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "home" ? "welcome-section" : item}`}
                className="relative text-indigo-500 font-medium hover:after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-indigo-500 after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-indigo-500 text-2xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-slate-100 flex flex-col items-center justify-center gap-8 text-xl z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl text-indigo-500"
            >
              <FaTimes />
            </button>

            {["home", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item === "home" ? "welcome-section" : item}`}
                onClick={() => setMenuOpen(false)}
                className="text-indigo-600 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Landing Section */}
      <section id="welcome-section" className="min-h-screen flex items-center">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
              welcome to my portfolio.
            </h1>
            <span className="text-lg text-indigo-500 font-medium">
              I'm front end developer which is cool.!
            </span>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-xl">
              I have made up this portfolio for publishing my projects. Feel free
              to explore and don’t forget to give feedback!
            </p>

            <a
              href="#projects"
              className="inline-block mt-6 bg-teal-400 hover:bg-teal-500 text-white px-5 py-2 rounded-md font-semibold transition"
            >
              let's explore
            </a>
          </div>

          <img
            className="hidden lg:block"
            src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
            alt="Coding Illustration"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-100 py-16">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Projects
        </h2>

        <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1498049860654-af1a5c566876"
                alt="Project"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  project name
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="inline-block bg-teal-400 hover:bg-teal-500 text-white px-4 py-1.5 rounded text-sm"
                >
                  view project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://codepen.io/FedLover/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-md transition"
          >
            show more <FaChevronRight />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-6">
          Contact
        </h2>
        <p className="text-center text-indigo-400 mb-10">
          send me your feedbacks and be{" "}
          <span className="text-pink-500 font-semibold inline-flex items-center gap-1">
            nice <FaHeart />
          </span>
        </p>

        <form className="max-w-2xl mx-auto px-4 space-y-4">
          <input className="w-full border p-3 rounded" placeholder="First name" />
          <input className="w-full border p-3 rounded" placeholder="Last name" />
          <input className="w-full border p-3 rounded" placeholder="Email" />
          <textarea
            className="w-full border p-3 rounded min-h-[200px]"
            placeholder="Your Message..."
          />
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-md font-semibold">
            Send Feedback
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 py-4 text-center text-blue-600">
        <p>
          personal portfolio for responsive web design course by{" "}
          <a
            href="https://www.freecodecamp.org/learn/responsive-web-design/"
            className="text-indigo-500 font-medium"
          >
            freeCodeCamp
          </a>
        </p>
      </footer>
    </div>
  );
}
