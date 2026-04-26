import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { BenefitsAndWaitlist } from './components/BenefitsAndWaitlist';
import { TechShowcase } from './components/TechShowcase';
import { Research } from './components/Research';
import { Blog } from './components/Blog';
import { Founders } from './components/Founders';
import { Investors } from './components/Investors';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { ResearchPage } from './pages/ResearchPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPost } from './pages/BlogPost';

function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <BenefitsAndWaitlist />
      <TechShowcase />
      <Research />
      <Blog />
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
    <BrowserRouter>
      <div className="bg-background text-white font-sans selection:bg-sky-400/20 relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/investors" element={<InvestorPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
