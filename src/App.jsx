import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import MidPageCTA from './components/MidPageCTA';
import Footer from './components/Footer';

import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SolutionsSection from './components/Solution';
import ClientsSection from './components/Clients';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ServicesSection />
              <SolutionsSection />
              <ClientsSection />
              <MidPageCTA />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
