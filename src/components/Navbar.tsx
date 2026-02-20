import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for render
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button onClick={scrollToTop} className="flex items-center gap-2 outline-none">
                    <img
                        src="/logo_dark.jpeg"
                        alt="Inlay Logo"
                        className="h-8 md:h-10 hover:opacity-80 transition-opacity mix-blend-screen"
                    />
                </button>

                <div className="hidden md:flex items-center gap-8">
                    <button onClick={scrollToTop} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Home
                    </button>
                    <button onClick={() => handleScroll('waitlist')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Waitlist
                    </button>
                    <button onClick={() => handleScroll('demo')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Demo
                    </button>
                    <button onClick={() => handleScroll('founders')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Founder
                    </button>
                    <Link to="/investors" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        For Investors
                    </Link>
                </div>

                <button onClick={() => handleScroll('waitlist')} className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(255,95,31,0.3)]">
                    Get Started
                </button>
            </div>
        </nav>
    );
}
