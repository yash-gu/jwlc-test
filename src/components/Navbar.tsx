import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Instagram } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home',         href: '#home' },
    { name: 'About Us',     href: '#about' },
    { name: 'Services',     href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Stories',      href: '#stories' },
    { name: 'Gallery',      href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact',      href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#1a0d10]/95 backdrop-blur-md shadow-lg border-b border-jaipur-pink/20'
          : 'bg-white/80 dark:bg-[#1a0d10]/80 backdrop-blur-sm'
      }`}
    >
      {/* Top ornamental stripe — Hawa Mahal pink & gold */}
      <div className="h-1 w-full bg-gradient-to-r from-jaipur-pink-deep via-jaipur-gold to-jaipur-pink-deep" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo — Hawa Mahal arch motif */}
          <a href="#home" className="flex-shrink-0 flex items-center gap-2 group">
            {/* Mini Hawa Mahal arch icon */}
            <div className="relative w-9 h-9 flex items-end justify-center">
              <div className="absolute bottom-0 w-9 h-6 bg-gradient-to-b from-jaipur-pink to-jaipur-pink-deep rounded-t-full" />
              <div className="absolute bottom-0 w-5 h-4 bg-gradient-to-b from-jaipur-gold to-jaipur-gold-warm rounded-t-full" />
              <div className="absolute bottom-0 w-2 h-2.5 bg-jaipur-pink-pale rounded-t-full" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold font-serifPremium bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                JWLC
              </span>
              <span className="text-[9px] uppercase tracking-widest text-jaipur-pink/70 dark:text-jaipur-pink-light/60 font-ui">
                Pink City Wellness
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-jaipur-dark dark:text-jaipur-pink-light hover:text-jaipur-pink dark:hover:text-jaipur-pink transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-jaipur-pink to-jaipur-gold group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Instagram link */}
            <a
              href="https://www.instagram.com/jaipurweightloss?igsh=NDNmbWlvazE2bzZl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="p-2 rounded-lg bg-jaipur-pink-pale dark:bg-jaipur-pink-deep/20 hover:bg-jaipur-pink-light dark:hover:bg-jaipur-pink-deep/30 border border-jaipur-pink/20 transition-colors"
            >
              <Instagram size={18} className="text-jaipur-pink-deep dark:text-jaipur-pink" />
            </a>
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-jaipur-pink-pale dark:bg-jaipur-pink-deep/20 hover:bg-jaipur-pink-light dark:hover:bg-jaipur-pink-deep/30 border border-jaipur-pink/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={18} className="text-jaipur-gold" />
              ) : (
                <Moon size={18} className="text-jaipur-pink-deep" />
              )}
            </button>

            {/* CTA button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white text-sm font-semibold rounded-lg shadow-sandstone hover:shadow-sandstone-hover hover:scale-105 transition-all duration-300"
            >
              Join Now
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-jaipur-pink-pale dark:bg-jaipur-pink-deep/20 border border-jaipur-pink/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={22} className="text-jaipur-pink-deep dark:text-jaipur-pink-light" />
              ) : (
                <Menu size={22} className="text-jaipur-pink-deep dark:text-jaipur-pink-light" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 border-t border-jaipur-pink/10 mt-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-2.5 text-jaipur-dark dark:text-jaipur-pink-light hover:bg-jaipur-pink-pale dark:hover:bg-jaipur-pink-deep/20 hover:text-jaipur-pink rounded-lg transition-colors font-medium text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-jaipur-pink mr-3 opacity-60" />
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-4">
              <a
                href="#contact"
                className="block text-center px-4 py-2.5 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white font-semibold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
