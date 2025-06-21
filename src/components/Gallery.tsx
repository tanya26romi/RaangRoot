import React from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-white bg-opacity-70 rounded-xl shadow border border-amber-100">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg bg-white border border-amber-200 p-2 aspect-square"
        >
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
