import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CinematicFilm from "./components/CinematicFilm";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import GlobalReach from "./components/GlobalReach";
import Leadership from "./components/Leadership";
import JourneyCta from "./components/JourneyCta";
import ContactHub from "./components/ContactHub";
import Footer from "./components/Footer";
import ScrollMotion from "./components/ScrollMotion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white selection:bg-[#f24e1e] selection:text-white">
      <ScrollMotion>
        <Navbar />
        <Hero />
        <CinematicFilm />
        <About />
        <Capabilities />
        <GlobalReach />
        <Leadership />
        <JourneyCta />
        <ContactHub />
        <Footer />
      </ScrollMotion>
    </main>
  );
}
