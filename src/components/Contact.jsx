"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Instagram,
  MessageCircle,
  Heart,
  Sparkles,
  Home,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    info: "61 9326-5927",
    description: "Ligue para agendar (atendimento)",
    bg: "from-pink-500 to-rose-500",
  },
  {
    icon: Home,
    title: "Atendimento",
    info: "Domiciliar",
    description: "Vamos até você",
    bg: "from-pink-600 to-rose-600",
  },
  {
    icon: Clock,
    title: "Horário",
    info: "Seg - Sáb: 9h às 18h",
    description: "Dom: Fechado",
    bg: "from-rose-600 to-pink-700",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@suelisaraivanaildesigner",
    bg: "from-pink-500 to-purple-600",
    href: "https://www.instagram.com/suelisaraivanaildesigner/",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    handle: "61 9326-5927 ",
    bg: "from-green-500 to-green-600",
    href: "https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5561993265927%26fbclid%3DPAZXh0bgNhZW0CMTEAAadYeayBwGIa0OmVO1Zvlhghjjj4twzS5w39qOkKwrMFZKEkMa8dgk4in60QQw_aem_FCZTLGZKfQO7n9viVCt3xg&e=AT1FxpcY5D4lGf3ewezGqnUx0a3yuRNsZqa7x4f0TAB228hF6eopwL8OkgQ7ulcDDdi9qL7J9wqSghIdKRSH8xub91KorU2PgDCJP8gEmQ",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden"
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
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white-100" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-3 md:mb-4 text-balance">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-pretty">
            Levamos nosso atendimento até você! Cuidamos das suas unhas no
            conforto da sua casa
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12 md:mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;

            return (
              <motion.div
                key={index}
                onClick={(contact) =>
                  contact.title === "telefone" &&
                  window.open(contact.href, "_blank")
                }
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl p-4 md:p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300 bg-gray-800/90 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${contact.bg} rounded-xl md:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white-100" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white-100 group-hover:text-pink-400 transition-colors mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-pink-400 font-semibold text-sm md:text-base mb-1">
                      {contact.info}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {contact.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Links & Additional Info */}
        <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white-100" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white-100">
                Redes Sociais
              </h3>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border border-gray-600 hover:border-pink-500 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${social.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white-100" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white-200 group-hover:text-pink-400 transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{social.handle}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10"></div>

            <div className="relative text-center">
              <motion.div
                initial={{ rotate: -10, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white-100/20 backdrop-blur-sm rounded-full mb-4 md:mb-6"
              >
                <Sparkles className="w-8 h-8 text-white-100" />
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold text-white-100 mb-3 md:mb-4 text-balance">
                Pronta para Transformar suas Unhas em Casa?
              </h3>
              <p className="text-white-100/90 mb-4 md:mb-6 leading-relaxed text-pretty">
                Entre em contato e agende seu atendimento domiciliar
                personalizado
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <div className="bg-white-100/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white-100 font-semibold text-sm">
                    🏠 Atendimento Domiciliar
                  </span>
                </div>
                <div className="bg-white-100/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-white-100 font-semibold text-sm">
                    💅 Produtos Premium
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
