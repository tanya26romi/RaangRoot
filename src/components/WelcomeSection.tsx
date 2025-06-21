
const WelcomeSection = () => {
  return (
    <section className="relative w-[100vw] h-[70vh] bg-amber-50 bg-opacity-90 text-center flex flex-col justify-center items-center py-4 px-2 md:px-4 pb-12 rounded-b-2xl shadow-lg overflow-hidden mx-auto">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Welcome Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none z-0"
      />
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif-display font-extrabold text-stone-800 mb-4 drop-shadow inline-block relative">
          Welcome to
          <span className="relative ml-3 px-4 py-1 bg-amber-100 rounded-2xl shadow text-amber-900 animate-pulse">
            Raang Root
          </span>
        </h2>
        <div className="text-xl md:text-2xl font-bold text-stone-700 mt-2 mb-4 tracking-tight">
          Celebrate. Create. Cherish.
        </div>
        <div className="text-base md:text-lg text-stone-600 font-sans-body mb-8 max-w-xl mx-auto">
          Unique events, unforgettable memories. Let’s make your next
          celebration truly special.
        </div>
        {/* Decorative floating icon */}
        <span className="absolute -top-8 right-8 text-amber-200 text-5xl opacity-60 select-none pointer-events-none">
          ✨
        </span>
      </div>
      <div className="flex justify-center items-end gap-0 mt-12 relative z-10">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
          alt="Indian Wedding Ceremony"
          className="w-48 h-48 object-cover rounded-2xl shadow-lg transform -rotate-6 -translate-y-2 z-20 border-4 border-white"
        />
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
          alt="Indian Birthday Celebration"
          className="w-56 h-56 object-cover rounded-2xl shadow-xl transform rotate-3 z-30 border-4 border-amber-100 scale-110 mx-[-1rem]"
        />
        <img
          src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80"
          alt="Indian Festive Decor"
          className="w-48 h-48 object-cover rounded-2xl shadow-lg transform rotate-6 translate-y-2 z-10 border-4 border-white"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
