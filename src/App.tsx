import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToHash } from "./components/ScrollToHash";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import { Contact } from './components/Contact';

import { Toaster } from '@/components/ui/toaster';
import { Quiz } from "@/components/Quiz";
import { Jarvis } from '@/components/Jarvis';

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Sponsors />
            <About />
            <HowItWorks />
            {/* <Features /> */}
            <Services />
            <Cta />
            {/* <Testimonials /> */}
            {/* <Team /> */}
            {/* <Pricing /> */}
            <Newsletter />
            <FAQ />
            <Contact />
          </>} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/jarvis" element={<Jarvis />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
