import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurRange from "./components/OurRange";
import SpinHelmets from "./components/SpinHelmets";
import NewlyLaunched from "./components/NewlyLaunched";
import Features from "./components/Features";
import Upgrade from "./components/Upgrade";
import Lifestyle from "./components/Lifestyle";
import Bestsellers from "./components/Bestsellers";
import SeeInMotion from "./components/SeeInMotion";
import Testimonials from "./components/Testimonials";
import SocialFeed from "./components/SocialFeed";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <OurRange />
        <SpinHelmets />
        <NewlyLaunched />
        <Features />
        <Upgrade />
        <Lifestyle />
        <Bestsellers />
        <SeeInMotion />
        <Testimonials />
        <SocialFeed />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
