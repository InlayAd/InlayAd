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
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav className="w-full max-w-5xl bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full pointer-events-auto flex items-center justify-between shadow-2xl">

                {/* Left: Logo */}
                <button onClick={scrollToTop} className="flex items-center outline-none shrink-0 pl-2">
                    <img
                        src="/logo_dark-nobg.png"
                        alt="Inlay Logo"
                        className="h-7 md:h-8 hover:opacity-80 transition-opacity"
                    />
                </button>

                {/* Center: Links */}
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

                {/* Right: Actions */}
                <div className="flex items-center shrink-0">
                    <button onClick={() => handleScroll('waitlist')} className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors hidden sm:block">
                        Get Started
                    </button>
                </div>
            </nav>
        </div>
    );
}
