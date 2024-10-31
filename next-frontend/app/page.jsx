import Brands from "./components/Brand";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Page() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Brands />
      <Services />
      <Contact />
    </div>
  );
}
