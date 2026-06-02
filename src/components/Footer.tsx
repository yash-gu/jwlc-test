import { Phone, Mail, MapPin, Heart, Instagram } from 'lucide-react';

// Mini Hawa Mahal arch row for footer top
function HawaMahalArchRow() {
  return (
    <div className="flex justify-center gap-1.5 overflow-hidden h-8 mb-0">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-t-full bg-gradient-to-b from-jaipur-pink/40 to-transparent flex-shrink-0"
        />
      ))}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Hawa Mahal arch top border */}
      <div className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-terracotta pt-2">
        <HawaMahalArchRow />
      </div>

      {/* Main footer body */}
      <div className="bg-[#1a0d10] text-white py-14 px-4 sm:px-6 lg:px-8 relative">
        {/* Jali overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, #E8536A 0, #E8536A 1px, transparent 0, transparent 50%),
              repeating-linear-gradient(-45deg, #E8536A 0, #E8536A 1px, transparent 0, transparent 50%)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-jaipur-pink/8 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                {/* Mini arch logo */}
                <div className="relative w-8 h-8 flex items-end justify-center">
                  <div className="absolute bottom-0 w-8 h-5 bg-gradient-to-b from-jaipur-pink to-jaipur-pink-deep rounded-t-full" />
                  <div className="absolute bottom-0 w-4 h-3.5 bg-gradient-to-b from-jaipur-gold to-jaipur-gold-warm rounded-t-full" />
                </div>
                <h3 className="text-xl font-bold font-serifPremium bg-gradient-to-r from-jaipur-pink via-jaipur-gold to-jaipur-pink-light bg-clip-text text-transparent">
                  Jaipur Wellness Community
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-ui leading-relaxed">
                Transforming lives through sustainable health goals and community support — inspired by the Pink City.
              </p>
              <p className="mt-4 text-jaipur-pink text-sm font-serifPremium italic">
                आज ही एक हेल्दी शुरुआत करें!
              </p>

              {/* Social links */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/jaipurweightloss?igsh=NDNmbWlvazE2bzZl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white text-xs font-semibold font-ui hover:scale-105 hover:shadow-sandstone transition-all duration-300 border border-jaipur-gold/20"
                >
                  <Instagram size={15} />
                  @jaipurweightloss
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-5 text-base font-serifPremium text-jaipur-pink-light flex items-center gap-2">
                <span className="text-jaipur-gold text-xs">✦</span> Quick Links
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm font-ui">
                {[
                  { label: 'Home',         href: '#home' },
                  { label: 'About',        href: '#about' },
                  { label: 'Services',     href: '#services' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Stories',      href: '#stories' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'Contact',      href: '#contact' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-jaipur-pink transition-colors flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-jaipur-pink/40 inline-block" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-5 text-base font-serifPremium text-jaipur-pink-light flex items-center gap-2">
                <span className="text-jaipur-gold text-xs">✦</span> Services
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm font-ui">
                {['Weight Loss', 'Weight Gain', 'Online Coaching', 'Diet Planning', 'Lifestyle Transformation'].map((s) => (
                  <li key={s}>
                    <a href="#services" className="hover:text-jaipur-pink transition-colors flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-jaipur-gold/40 inline-block" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-5 text-base font-serifPremium text-jaipur-pink-light flex items-center gap-2">
                <span className="text-jaipur-gold text-xs">✦</span> Contact Info
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm font-ui">
                <li>
                  <a href="tel:9680801786" className="flex items-center gap-2 hover:text-jaipur-pink transition-colors">
                    <Phone size={15} className="text-jaipur-pink flex-shrink-0" />
                    +91 9680801786
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@jwlc.com" className="flex items-center gap-2 hover:text-jaipur-pink transition-colors">
                    <Mail size={15} className="text-jaipur-gold flex-shrink-0" />
                    contact@jwlc.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={15} className="text-jaipur-terracotta flex-shrink-0 mt-0.5" />
                  <div>
                    J-128, Dhobiyon Ka Mod,<br />
                    Near Oxford School,<br />
                    Adarsh Nagar, Jaipur
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-jaipur-pink text-xs">⏰</span>
                  <span>8:30 AM – 9:30 AM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-jaipur-pink/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2 font-ui">
              Made with <Heart size={15} className="text-jaipur-pink fill-jaipur-pink" /> by Jaipur Weight Loss Community
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/jaipurweightloss?igsh=NDNmbWlvazE2bzZl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-1.5 text-gray-400 hover:text-jaipur-pink transition-colors text-sm font-ui"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <div className="flex items-center gap-2">
                <span className="text-jaipur-gold text-xs">✦</span>
                <p className="text-gray-500 text-sm font-ui">
                  &copy; {currentYear} JWLC. All rights reserved.
                </p>
                <span className="text-jaipur-gold text-xs">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
