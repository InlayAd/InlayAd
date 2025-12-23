import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { TechShowcase } from './components/TechShowcase';
import { BusinessModel } from './components/BusinessModel';
import { Founders } from './components/Founders';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30">
      <Hero />
      <Problem />
      <TechShowcase />
      <BusinessModel />
      <Founders />
      <Contact />

      <footer className="py-8 text-center text-gray-600 text-sm bg-black">
        <p>&copy; {new Date().getFullYear()} Inlay. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
