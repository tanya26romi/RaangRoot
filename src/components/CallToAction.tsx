
const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 to-stone-700 rounded-2xl shadow-xl p-8 md:p-12 text-center my-12">
      <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-amber-50 mb-6">
        Ready to Plan Your Next Event?
      </h2>
      <p className="text-lg font-sans-body text-stone-200 mb-8 max-w-2xl mx-auto">
        Contact us today for a personalized consultation and let's bring your vision to life.
      </p>
      <button className="bg-amber-50 text-stone-700 hover:bg-amber-100 hover:text-stone-800 font-sans-body font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-opacity-75">
        Get a Free Quote
      </button>
    </section>
  );
};

export default CallToAction;
