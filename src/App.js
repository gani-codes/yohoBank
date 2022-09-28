import "./App.css";
import About from "./components/about/About";
import Billing from "./components/billing/Billing";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pay from "./components/pay/Pay";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Billing />
      <Pay />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
