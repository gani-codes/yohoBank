import "./App.css";
import About from "./components/about/About";
import Billing from "./components/billing/Billing";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Billing />
    </>
  );
}

export default App;
