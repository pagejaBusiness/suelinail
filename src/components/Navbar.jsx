import { useState } from "react";
import { FiHome, FiUser, FiImage, FiMail, FiStar } from "react-icons/fi";

const navItens = [
  { name: "Home", link: "#hero", icon: FiStar },
  { name: "Sobre", link: "#about", icon: FiUser },
  { name: "Galeria", link: "#gallery", icon: FiImage },
  { name: "Serviços", link: "#services", icon: FiHome },
  { name: "Contato", link: "#contact", icon: FiMail },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-16 md:h-20 bg-blackForest/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8 h-full">
        {/* Logo */}
        <div className="h-10 md:h-16 w-auto">
          <img
            src="https://res.cloudinary.com/pageja/image/upload/v1758331628/logo4_o3y8sj.webp"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Itens Desktop */}
        <div className="hidden md:flex gap-8">
          {navItens.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.link);
              }}
              className="relative font-medium text-gray-200 transition-all duration-500 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-500 after:to-rose-500 after:transition-all after:duration-500 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      <div className="md:hidden relative">
        <div
          className={`absolute top-full left-0 w-full overflow-hidden rounded-b-2xl
            bg-gradient-to-b from-rose-200/90 to-pink-200/90
            backdrop-blur-sm shadow-xl
            transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
        >
          <div className="flex flex-col items-center gap-4 py-6">
            {navItens.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.link);
                    setIsOpen(false);
                  }}
                  className={`w-5/6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium
                    text-blackForest transform transition-all duration-500
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-6 scale-95"
                    }
                    hover:scale-105 hover:shadow-lg
                    relative`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <Icon className="w-5 h-5 text-pink-500" />
                  <span className="relative text-blackForest hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:bg-clip-text transition-all duration-300">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 bg-gradient-to-r from-pink-400 to-rose-400 transition-all duration-300"></span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
