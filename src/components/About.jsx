import { motion } from "framer-motion";

function About() {
  const text = `Sueli é a fundadora da Sueli Nail, uma profissional apaixonada pelo mundo da beleza e especializada no cuidado das unhas. Sua jornada começou com o desejo de transformar a autoestima das pessoas através de um trabalho detalhista e de qualidade. Ao longo de sua carreira, Sueli se dedicou ao aperfeiçoamento constante, buscando formações e técnicas modernas que hoje a tornam referência em seu segmento. Seu compromisso vai além da estética: ela acredita que cada atendimento é uma oportunidade de proporcionar bem-estar, confiança e elegância. Com anos de experiência e um olhar atento às tendências, Sueli consolidou sua marca como sinônimo de excelência e cuidado personalizado. Seu propósito é simples e poderoso:`;

  const destaque = "ajudar cada cliente a se sentir ainda mais especial.";

  return (
    <section className="about-container relative overflow-hidden" id="about">
      <div className="relative z-10 bg-black py-12 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Texto (altura de referência) */}
        <div
          className="about-section text-white-100 flex-1 max-w-2xl"
          id="about-text"
        >
          <h2 className="font-bold text-2xl pb-6 text-pink-400">Sobre Nós</h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            className="text-justify text-lg md:text-xl leading-relaxed"
          >
            {text.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                style={{ display: "inline" }}
              >
                {word}{" "}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: text.split(" ").length * 0.07 }}
              className="text-pink-500 font-semibold drop-shadow-[0_0_8px_#ec4899]"
              style={{ display: "inline" }}
            >
              {destaque}
            </motion.span>
          </motion.p>
        </div>

        {/* Imagem limitada pela altura do texto */}
        <div className="flex-1 flex justify-center max-w-lg">
          <img
            src="https://res.cloudinary.com/pageja/image/upload/v1758411433/395173621_857234905839213_7210485025604822839_n_cphppq.jpg"
            alt="Sueli Nail"
            className="about-image w-auto max-h-full object-cover rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:shadow-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
