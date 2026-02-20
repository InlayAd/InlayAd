import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsAndWaitlist } from './components/BenefitsAndWaitlist';
import { TechShowcase } from './components/TechShowcase';
import { Founders } from './components/Founders';
import { Investors } from './components/Investors';
import { Roadmap } from './components/Roadmap';

function LandingPage() {
  return (
    <>
      <Hero />
      <BenefitsAndWaitlist />
      <TechShowcase />
      <Founders />
    </>
  );
}

function InvestorPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Investors />
      <Roadmap />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="bg-background text-white font-sans selection:bg-primary/30 relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/investors" element={<InvestorPage />} />
        </Routes>
        <footer className="py-8 text-center text-gray-600 text-sm bg-black border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Inlay. All rights reserved.</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
