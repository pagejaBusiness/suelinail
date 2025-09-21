"use client";

import { Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-blackForest text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
        {/* Texto promocional */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold text-white-100 flex items-center gap-2"
        >
          Garanta já sua{" "}
          <span className="text-pink-500">página personalizada</span>
          <img
            src="https://res.cloudinary.com/pageja/image/upload/v1758481137/sem_fundo_ot8c95.png"
            alt="logo pageja"
            className="h-14 inline-block object-contain"
          />
        </motion.h3>

        {/* Links de contato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/556193664831"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-green-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base">+55 61 9366-4831</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pagej_aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-pink-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm  md:text-base ">@pagej_aa</span>
          </a>
        </motion.div>

        {/* Direitos autorais */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs text-gray-400"
        >
          &copy; {new Date().getFullYear()} PageJa. Todos os direitos
          reservados.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
