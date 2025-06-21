import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 text-center py-6 px-4 rounded-t-xl mt-12">
      <p className="font-sans-body">
        &copy; {new Date().getFullYear()} Event Elegance. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="#"
          className="font-sans-body hover:text-amber-200 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="font-sans-body hover:text-amber-200 transition-colors duration-200"
        >
          Terms of Service
        </a>
      </div>
      <div className="text-center text-stone-500 text-sm mt-4">
        Crafted this website with love by{" "}
        <span className="text-amber-200 animate-pulse font-semibold">
          Tanya Sinha
        </span>
      </div>
    </footer>
  );
};

export default Footer;
