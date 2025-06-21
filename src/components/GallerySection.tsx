import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=600&q=80",
];

const GallerySection: React.FC = () => (
  <section className="w-full min-h-screen py-16 px-4 bg-amber-50 bg-opacity-80 rounded-2xl shadow-lg flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-stone-800 mb-8">
      Gallery
    </h2>
    <div className="grid grid-cols-4 gap-4 w-full h-full">
      {galleryImages.map((src, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg bg-white aspect-square w-full h-full"
        >
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
