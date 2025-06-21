import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUsAndQuotes from "./components/AboutUsAndQuotes";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ContactDetails from "./components/ContactDetails";
import GallerySection from "./components/GallerySection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-stone-100 via-gray-100 to-amber-50 font-sans-body antialiased text-gray-800">
              <Header />
              <div id="home">
                <WelcomeSection />
              </div>
              <HeroSection />
              <main className="container mx-auto p-6 md:p-12">
                <section id="services">
                  <ServicesSection />
                </section>
                <section id="gallery">
                  <AboutUsAndQuotes />
                </section>
                <section id="contact">
                  <ContactDetails />
                </section>
                <CallToAction />
              </main>
              <Footer />
            </div>
          }
        />
        <Route
          path="/gallery"
          element={
            <div className="min-h-screen bg-gradient-to-br from-stone-100 via-gray-100 to-amber-50 font-sans-body antialiased text-gray-800">
              <Header />
              <GallerySection />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
