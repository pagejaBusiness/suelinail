"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Palette,
  Shield,
  Scissors,
  Brush,
  Star,
  Waves,
  Heart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    name: "Alongamento de Unhas",
    icon: Scissors,
    description: "Técnicas avançadas para unhas perfeitas",
    bg: "url('https://res.cloudinary.com/pageja/image/upload/v1758458575/SaveInsta.to_503285178_1202500841132098_908609740253401812_n_bdkgxl.jpg')",
  },
  {
    name: "Banho de Gel",
    icon: Sparkles,
    description: "Acabamento duradouro e brilhante",
    bg: "url(https://res.cloudinary.com/pageja/image/upload/v1758458650/505415187_1501087367526902_8250653842794489167_n_bqlltu.jpg)",
  },
  {
    name: "Blindagem",
    icon: Shield,
    description: "Proteção e fortalecimento das unhas",
    bg: "url(https://res.cloudinary.com/pageja/image/upload/v1758458739/SaveInsta.to_502042586_1247348973435941_8476452411516029167_n_lyrosx.jpg)",
  },
  {
    name: "Cutilagem Russa",
    icon: Star,
    description: "Técnica premium de cuidado",
    bg: "url(https://res.cloudinary.com/pageja/image/upload/v1758458810/500780409_719757517291835_7169451527810048716_n_rhdeik.jpg)",
  },
  {
    name: "Esmaltação em Gel",
    icon: Brush,
    description: "Cores vibrantes que duram semanas",
    bg: "url(https://res.cloudinary.com/pageja/image/upload/v1758458958/Captura_de_tela_2025-09-21_094850_s4bzke.png)",
  },
  {
    name: "Decoração",
    icon: Palette,
    description: "Arte personalizada para suas unhas",
    bg: "url(https://res.cloudinary.com/pageja/image/upload/v1758459032/Captura_de_tela_2025-09-21_095018_pq1t38.png)",
  },
  {
    name: "Spa dos Pés",
    icon: Waves,
    description: "Relaxamento e cuidado completo",
    bg: "url(https://res.cloudinary.com/pageja/image/upload/v1758459061/SaveInsta.to_497892915_29687775367534904_4859937734170878675_n_egrs4g.jpg)",
  },
];

function Services() {
  const [favorites, setFavorites] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="services"
      className="py-12 md:py-24 bg-gradient-to-br from-slate-100 via-pink-50 to-rose-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/subtle-floral-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-4 md:mb-6"
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white-100" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3 md:mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            Transforme suas unhas com nossos tratamentos especializados e
            técnicas de última geração
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12 md:mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isFavorite = favorites.includes(index);
            const isSelected = selectedService === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(isSelected ? null : index)}
                className={`relative group rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl p-4 md:p-8 border transition-all duration-300 cursor-pointer overflow-hidden bg-white-100/90 ${
                  isSelected
                    ? "border-pink-400 shadow-pink-200/50 scale-[1.02]"
                    : "border-pink-100 hover:border-pink-300"
                }`}
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(index);
                  }}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white-100/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Heart
                    className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                      isFavorite
                        ? "text-pink-500 fill-pink-500"
                        : "text-gray-400"
                    }`}
                  />
                </motion.button>

                {/* Background image */}
                {service.bg && (
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                      isSelected
                        ? "opacity-40"
                        : "opacity-0 group-hover:opacity-30"
                    }`}
                    style={{ backgroundImage: service.bg }}
                  ></div>
                )}

                {/* Content */}
                <div className="relative flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl md:rounded-2xl flex items-center justify-center transition-transform duration-300 ${
                        isSelected ? "scale-110" : "group-hover:scale-110"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white-100" />
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`text-lg md:text-xl font-bold mb-1 md:mb-2 transition-colors ${
                        isSelected
                          ? "text-pink-600"
                          : "text-gray-800 group-hover:text-pink-600"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                      {service.description}
                    </p>
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-rose-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    Agendar
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>

          <div className="relative p-6 md:p-12 text-center">
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white-100/20 backdrop-blur-sm rounded-full mb-6 md:mb-8"
            >
              <Star className="w-8 h-8 md:w-10 md:h-10 text-white-100" />
            </motion.div>

            <h3 className="text-2xl md:text-4xl font-bold text-white-100 mb-4 md:mb-6 text-balance">
              Cursos Profissionalizantes
            </h3>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-white-200 mb-6 md:mb-8 leading-relaxed text-pretty">
                Torne-se uma{" "}
                <span className="font-bold text-white-100">
                  especialista certificada
                </span>{" "}
                com nossos cursos de{" "}
                <span className="font-bold text-white-100">Manicure Russa</span>{" "}
                e{" "}
                <span className="font-bold text-white-100">
                  Esmaltação em Gel
                </span>
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
                <div className="bg-white-100/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                  <span className="text-white-100 font-semibold text-sm md:text-base">
                    ✨ Certificação Profissional
                  </span>
                </div>
                <div className="bg-white-100/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                  <span className="text-white-100 font-semibold text-sm md:text-base">
                    🎯 Técnicas Avançadas
                  </span>
                </div>
                <div className="bg-white-100/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
                  <span className="text-white-100 font-semibold text-sm md:text-base">
                    💼 Suporte Profissional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
