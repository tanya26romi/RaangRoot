
// Reference: https://tailwindui.com/components/application-ui/navigation/navbars

const Header = () => {
  return (
    <header className="bg-gradient-to-r bg-green-950 to-stone-900 shadow-xl py-2 px-6 md:px-12 rounded-b-2xl flex justify-between items-center z-10 backdrop-blur">
      <a href="/">
        <h1 className="text-3xl md:text-4xl font-serif-display font-extrabold text-amber-500 tracking-wide drop-shadow-lg">
          Raang Root
        </h1>
      </a>
      <nav className="flex space-x-6">
        <a
          href="#home"
          className="group text-white hover:text-amber-200 font-sans-body font-bold transition-all duration-200 px-2 py-1 rounded focus:text-amber-100 focus:text-xl active:text-amber-100 active:text-xl aria-[current=page]:text-amber-100 aria-[current=page]:text-xl"
          aria-current="page"
        >
          Home
        </a>
        <a
          href="#services"
          className="group text-white hover:text-amber-200 font-sans-body font-bold transition-all duration-200 px-2 py-1 rounded focus:text-amber-100 focus:text-xl active:text-amber-100 active:text-xl"
        >
          Services
        </a>
        <a
          href="/gallery"
          className="group text-white hover:text-amber-200 font-sans-body font-bold transition-all duration-200 px-2 py-1 rounded focus:text-amber-100 focus:text-xl active:text-amber-100 active:text-xl"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="group text-white hover:text-amber-200 font-sans-body font-bold transition-all duration-200 px-2 py-1 rounded focus:text-amber-100 focus:text-xl active:text-amber-100 active:text-xl"
        >
          Contact Us
        </a>
      </nav>
      <button className="md:hidden text-amber-200 hover:text-amber-300 focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
