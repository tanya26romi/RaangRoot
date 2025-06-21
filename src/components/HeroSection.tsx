
const HeroSection = () => {
  return (
    <section className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 md:p-16 text-center mt-28 mb-0 w-[90vw] max-w-6xl mx-auto backdrop-blur-sm">
      <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-green-800 mb-6 leading-tight">
        Crafting Unforgettable Moments
      </h2>
      <p className="text-lg md:text-xl font-sans-body text-gray-700 mb-8 max-w-3xl mx-auto">
        From intimate birthdays to grand marriage ceremonies, we design events
        that reflect your unique style and create lasting memories.
      </p>
      <button
        className="bg-stone-700 hover:bg-stone-800 text-amber-50 font-sans-body font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-opacity-75"
        onClick={() => {
          const section = document.getElementById("services");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore Our Services
      </button>
    </section>
  );
};

export default HeroSection;
