import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../Images/Slider.webp";
import Img2 from "../Images/Slider2.webp";
import Img3 from "../Images/Slider3.webp";
import Img4 from "../Images/Slider4.webp";
import Img5 from "../Images/Slider5.webp";
import Img6 from "../Images/Slider6.webp";

import Sueli from "../Images/Sueli.webp";
const images = [Img1, Img2, Img3, Img4, Img5, Img6];

function Herosection() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  // Troca automática dos slides
  useEffect(() => {
    const timer = setTimeout(nextSlide, 8000); // 8 segundos
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full h-[636px] flex items-center justify-center overflow-hidden px-8 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <motion.div
        className="flex flex-row items-center w-auto h-auto z-10 gap-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-2xl lg:text-4xl font-extrabold text-white text-left max-w-auto p-6 rounded-xl bg-black bg-opacity-40 shadow-xl backdrop-blur-sm border-l-4 border-pink-400">
          <span className="block mb-2">
            Bem-vindo à Sueli Saraiva Nail Designer!
          </span>
          <span className="font-semibold text-pink-400 block mb-5">
            Cuidamos da beleza e saúde das suas unhas com carinho e
            profissionalismo.
          </span>
          <span className="text-base font-light text-white block">
            Aqui, cada detalhe importa para que você tenha momentos de
            autocuidado, confiança e estilo.
          </span>
        </h1>
        <div className="w-100 h-100 flex items-center justify-center">
          <img
            src={Sueli}
            alt="Sueli"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 12px #ec4899)",
            }}
          />
        </div>
      </motion.div>
      {/* Seletor de slides */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
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
