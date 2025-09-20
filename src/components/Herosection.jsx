import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://res.cloudinary.com/pageja/image/upload/v1758332724/Slider2_cbagbg.webp",
  },
  {
    url: "https://res.cloudinary.com/pageja/image/upload/v1758332721/Slider4_spvwva.webp",
  },
  {
    url: "https://res.cloudinary.com/pageja/image/upload/v1758332717/Slider5_cmtxwy.webp",
  },
  {
    url: "https://res.cloudinary.com/pageja/image/upload/v1758332716/Slider3_yak8uo.webp",
  },
  {
    url: "https://res.cloudinary.com/pageja/image/upload/v1758332715/Slider6_hoahvg.webp",
  },
  {
    url: "https://res.cloudinary.com/pageja/image/upload/v1758332715/Slider_mgoenw.webp",
  },
];

function Herosection() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  // Troca automática dos slides
  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // 8 segundos
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].url}
          src={images[index].url}
          alt={`Slide ${index + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <motion.div
        className="md:flex flex-row items-center w-auto h-auto z-10 gap-40 "
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className=" md:text-2xl lg:text-4xl font-extrabold text-white text-left max-w-auto p-6 rounded-xl bg-black bg-opacity-40 shadow-xl backdrop-blur-sm border-l-4 border-pink-400">
          <span className="block text-gray-200 mb-2">
            Bem-vindo à Sueli Saraiva Nail Designer!
          </span>
          <span className="font-semibold text-pink-400 block mb-5">
            Cuidamos da beleza e saúde das suas unhas com carinho e
            profissionalismo.
          </span>
          <span className="text-base font-light text-white block text-gray-200">
            Aqui, cada detalhe importa para que você tenha momentos de
            autocuidado, confiança e estilo.
          </span>
        </h1>
        <div className=" flex items-center justify-center md:w-100 h-100 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/pageja/image/upload/v1758331628/logo4_o3y8sj.webp"
            alt="Sueli"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 12px #ec4899)",
            }}
          />
        </div>
      </motion.div>
      {/* Seletor de slides */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-4 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-5 h-2 rounded-full transition-all duration-300 hover:border-2 border-pink-400 ${
              index === i
                ? "bg-pink-400 shadow-xl scale-110"
                : "bg-black bg-opacity-40"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Herosection;
