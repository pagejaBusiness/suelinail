"use client";

import { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400600/SaveInsta.to_503887556_1065219155521209_3698890969661897329_n_kgucwt.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400579/SaveInsta.to_495690420_991812413097097_7180062257730694013_n_k7xoi6.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400565/SaveInsta.to_503700685_1082742967054467_7725863413548076708_n_1_h9dcrf.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400542/SaveInsta.to_491427198_1038279598227257_9091478427648398551_n_q6tedo.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400537/504147785_1674131319877816_8443514279570170265_n_wtcmnx.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400528/504210504_1716356482314513_3942485151461694358_n_wzhe48.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758400517/502710624_1253398689822240_532341318339273819_n_kbkdcg.jpg",
  },
  {
    src: "https://res.cloudinary.com/pageja/image/upload/v1758401582/SaveInsta.to_497169618_2525275487819044_9184728013176056397_n_i9govu.jpg",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Gera os spans aleatórios para cada imagem
  const rowSpans = useMemo(
    () => images.map(() => Math.floor(Math.random() * 3) + 2),
    []
  );

  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-6 py-12 min-h-screen"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/pageja/image/upload/v1758409998/Sem_T%C3%ADtulo-1_htufvw.png')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white-100 relative inline-block animate-fade-slide">
            Galeria
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide max-w-2xl mx-auto mt-4">
            Uma coleção visual que captura momentos únicos e memórias especiais
          </p>

          <style jsx>{`
            @keyframes fadeSlide {
              0% {
                opacity: 0;
                transform: translateX(-50px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .animate-fade-slide {
              animation: fadeSlide 1s ease forwards;
            }
          `}</style>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 auto-rows-auto">
          {images.map((img, i) => {
            const span = rowSpans[i];
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25"
                style={{ gridRowEnd: `span ${span}` }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={`galeria-${i}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-purple-400/50 rounded-2xl transition-all duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
          animation={{ fade: 400 }}
          styles={{
            container: {
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(10px)",
            },
          }}
          render={{
            overlay: ({ style }) => (
              <div
                style={{
                  ...style,
                  backgroundColor: "rgba(0,0,0,0.85)",
                  backdropFilter: "blur(10px)",
                }}
              />
            ),
            renderNext: () => (
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 text-4xl font-bold z-50 p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all duration-300">
                &#10095;
              </button>
            ),
            renderPrev: () => (
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 text-4xl font-bold z-50 p-3 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all duration-300">
                &#10094;
              </button>
            ),
          }}
        />
      )}
    </section>
  );
}
