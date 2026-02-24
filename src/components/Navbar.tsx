import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav aria-label="Main navigation" className="w-full max-w-5xl bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full pointer-events-auto flex items-center justify-between shadow-2xl">

                    {/* Left: Logo */}
                    <button onClick={scrollToTop} className="flex items-center outline-none shrink-0 pl-2">
                        <img
                            src="/logo_dark-nobg.png"
                            alt="Inlay Logo"
                            className="h-7 md:h-8 hover:opacity-80 transition-opacity"
                        />
                    </button>

                    {/* Center: Desktop Links */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8">
                        <button onClick={scrollToTop} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Home
                        </button>
                        <button onClick={() => handleScroll('waitlist')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Waitlist
                        </button>
                        <button onClick={() => handleScroll('demo')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Docs
                        </button>
                        <button onClick={() => handleScroll('founders')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Founder
                        </button>
                        <Link to="/investors" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Investors
                        </Link>
                    </div>

                    {/* Right: Desktop CTA + Mobile Hamburger */}
                    <div className="flex items-center shrink-0 gap-2">
                        <button onClick={() => handleScroll('waitlist')} className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors hidden sm:block">
                            Get Started
                        </button>

                        {/* Hamburger Button (Mobile Only) */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-primary transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="fixed top-20 left-4 right-4 z-50 bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="flex flex-col gap-4">
                                <button onClick={scrollToTop} className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5">
                                    Home
                                </button>
                                <button onClick={() => handleScroll('waitlist')} className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5">
                                    Waitlist
                                </button>
                                <button onClick={() => handleScroll('demo')} className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5">
                                    Docs
                                </button>
                                <button onClick={() => handleScroll('insights')} className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5">
                                    Insights
                                </button>
                                <button onClick={() => handleScroll('founders')} className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5">
                                    Founder
                                </button>
                                <Link to="/investors" onClick={() => setMobileMenuOpen(false)} className="text-left text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5">
                                    Investors
                                </Link>
                                <button
                                    onClick={() => handleScroll('waitlist')}
                                    className="mt-2 w-full py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(255,95,31,0.3)]"
                                >
                                    Get Started
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
