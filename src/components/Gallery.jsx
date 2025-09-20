// src/components/Gallery.jsx
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
    <section className="bg-rose-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 tracking-tight">
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent inline-block animate-gradient glow-text">
            Nossa Galeria
          </span>
        </h2>

        {/* Grid estilo Pinterest */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-auto">
          {images.map((img, i) => {
            const span = rowSpans[i];
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                style={{ gridRowEnd: `span ${span}` }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={img.src}
                  alt={`galeria-${i}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
          animation={{ fade: 300 }}
          styles={{
            container: {
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(5px)",
            },
          }}
          render={{
            overlay: ({ style }) => (
              <div
                style={{
                  ...style,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(5px)",
                }}
              />
            ),
            renderNext: () => (
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 p-2">
                &#10095;
              </button>
            ),
            renderPrev: () => (
              <button className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl font-bold z-50 p-2">
                &#10094;
              </button>
            ),
          }}
        />
      )}
    </section>
  );
}
