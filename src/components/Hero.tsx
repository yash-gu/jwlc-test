import { ChevronDown } from 'lucide-react';

// Hawa Mahal SVG silhouette — iconic 5-storey facade
function HawaMahalSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base platform */}
      <rect x="0" y="370" width="800" height="30" fill="currentColor" opacity="0.6" />

      {/* Main body tiers */}
      {/* Tier 1 (bottom) — widest */}
      <rect x="50" y="280" width="700" height="90" fill="currentColor" opacity="0.5" />
      {/* Tier 2 */}
      <rect x="100" y="210" width="600" height="75" fill="currentColor" opacity="0.55" />
      {/* Tier 3 */}
      <rect x="150" y="150" width="500" height="65" fill="currentColor" opacity="0.6" />
      {/* Tier 4 */}
      <rect x="200" y="100" width="400" height="55" fill="currentColor" opacity="0.65" />
      {/* Tier 5 (top) */}
      <rect x="260" y="60" width="280" height="45" fill="currentColor" opacity="0.7" />

      {/* Top crown arches — tier 5 */}
      {[280, 320, 360, 400, 440, 480, 520].map((x, i) => (
        <ellipse key={`t5-${i}`} cx={x} cy="60" rx="16" ry="22" fill="currentColor" opacity="0.75" />
      ))}

      {/* Tier 4 arches */}
      {[220, 260, 300, 340, 380, 420, 460, 500, 540, 580].map((x, i) => (
        <ellipse key={`t4-${i}`} cx={x} cy="100" rx="16" ry="20" fill="currentColor" opacity="0.7" />
      ))}

      {/* Tier 3 arches */}
      {[170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610].map((x, i) => (
        <ellipse key={`t3-${i}`} cx={x} cy="150" rx="16" ry="20" fill="currentColor" opacity="0.65" />
      ))}

      {/* Tier 2 arches */}
      {[120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640].map((x, i) => (
        <ellipse key={`t2-${i}`} cx={x} cy="210" rx="16" ry="20" fill="currentColor" opacity="0.6" />
      ))}

      {/* Tier 1 arches (windows) */}
      {[70, 110, 150, 190, 230, 270, 310, 350, 390, 430, 470, 510, 550, 590, 630, 670, 710].map((x, i) => (
        <ellipse key={`t1-${i}`} cx={x} cy="280" rx="16" ry="20" fill="currentColor" opacity="0.55" />
      ))}

      {/* Decorative finials on top */}
      {[280, 340, 400, 460, 520].map((x, i) => (
        <polygon key={`fin-${i}`} points={`${x},30 ${x - 6},55 ${x + 6},55`} fill="currentColor" opacity="0.8" />
      ))}
    </svg>
  );
}

export default function Hero() {
  const heroImages = import.meta.glob('./WhatsApp Image 2026-06-02 at 18.57.53.jpeg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
  const heroImage = Object.values(heroImages)[0];

  return (
    <section
      id="home"
      className="min-h-screen pt-16 relative overflow-hidden bg-gradient-to-br from-jaipur-pink-pale via-white to-jaipur-pink-light dark:from-[#1a0d10] dark:via-[#220e14] dark:to-[#1a0d10] transition-colors duration-500"
    >
      {/* ── Hawa Mahal silhouette watermark ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none z-0">
        <HawaMahalSilhouette className="w-full text-jaipur-pink opacity-[0.07] dark:opacity-[0.05]" />
      </div>

      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-jaipur-pink/20 dark:bg-jaipur-pink/8 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-jaipur-gold/15 dark:bg-jaipur-gold/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-jaipur-pink-light/30 dark:bg-jaipur-pink-deep/5 rounded-full filter blur-3xl" />
      </div>

      {/* ── Jali lattice overlay ── */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #E8536A 0, #E8536A 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, #E8536A 0, #E8536A 1px, transparent 0, transparent 50%)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jaipur-pink/10 border border-jaipur-pink/25 text-jaipur-pink-deep dark:text-jaipur-pink-light text-xs font-semibold uppercase tracking-widest shadow-sm">
              <span className="text-jaipur-gold">✦</span>
              <span>The Pink City Wellness Guild</span>
              <span className="text-jaipur-gold">✦</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-jaipur-dark dark:text-white mb-4 leading-tight font-serifPremium">
                Welcome to the
                <span className="block mt-2 bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent font-extrabold">
                  Jaipur Weight Loss
                </span>
                <span className="block text-4xl md:text-5xl bg-gradient-to-r from-jaipur-gold via-jaipur-gold-warm to-jaipur-pink bg-clip-text text-transparent">
                  Community
                </span>
              </h1>

              {/* Ornamental divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-jaipur-pink/40" />
                <span className="text-jaipur-gold text-lg">🏯</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-jaipur-pink/40" />
              </div>

              <p className="text-xl text-jaipur-dark/80 dark:text-gray-300 mb-4 font-medium italic font-serifPremium">
                Tired of trying and failing? You're not alone — and it's not your fault.
              </p>
              <p className="text-base text-jaipur-dark/70 dark:text-gray-400 leading-relaxed font-ui">
                Hundreds of people in Jaipur have already transformed their health — without extreme diets, without unrealistic routines. Just the right guidance, real support, and a community that walks with you every single day.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="px-7 py-3.5 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white font-bold rounded-xl border border-jaipur-gold/30 shadow-sandstone hover:shadow-sandstone-hover hover:scale-105 transition-all duration-300 font-ui text-center">
                Book Free Consultation
              </a>
              <a href="#how-it-works" className="px-7 py-3.5 bg-white dark:bg-[#2a1018] text-jaipur-pink-deep dark:text-jaipur-pink-light font-bold rounded-xl border-2 border-jaipur-pink/40 shadow-md hover:border-jaipur-gold hover:text-jaipur-gold hover:scale-105 transition-all duration-300 font-ui text-center">
                See How It Works
              </a>
              <a href="#stories" className="px-7 py-3.5 bg-jaipur-pink-pale dark:bg-[#2a1018] text-jaipur-dark dark:text-white font-bold rounded-xl border-2 border-jaipur-gold/50 shadow-md hover:border-jaipur-gold-warm hover:scale-105 transition-all duration-300 font-ui text-center">
                View Success Stories
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: '🏆', label: '95% Success Rate' },
                { icon: '👥', label: '500+ Members' },
                { icon: '⭐', label: '5-Star Rated' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#2a1018] border border-jaipur-pink/20 shadow-sm text-sm font-medium text-jaipur-dark dark:text-jaipur-pink-light">
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image in Hawa Mahal arch frame ── */}
          <div className="relative hidden md:flex flex-col items-center">

            {/* Outer arch frame */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative arch top */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[110%] h-16 z-10 pointer-events-none">
                <svg viewBox="0 0 320 60" className="w-full text-jaipur-pink" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Hawa Mahal top crenellations */}
                  {[20, 50, 80, 110, 140, 160, 180, 210, 240, 270, 300].map((x, i) => (
                    <rect key={i} x={x} y="30" width="14" height="20" rx="2" fill="currentColor" opacity="0.5" />
                  ))}
                  {/* Arch curve */}
                  <path d="M10 60 Q160 0 310 60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
                  {/* Gold finials */}
                  {[80, 160, 240].map((x, i) => (
                    <polygon key={`f-${i}`} points={`${x},5 ${x - 5},20 ${x + 5},20`} fill="#D4AF37" opacity="0.8" />
                  ))}
                </svg>
              </div>

              {/* Image container with arch border */}
              <div className="relative aspect-[3/4] rounded-t-[50%] rounded-b-2xl overflow-hidden border-4 border-jaipur-pink/60 shadow-[0_0_40px_rgba(232,83,106,0.25)] bg-jaipur-pink-pale">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt="Jaipur Wellness Community"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-jaipur-pink-pale to-jaipur-pink-light">
                    <span className="text-6xl">🏯</span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-jaipur-pink-deep/40 via-transparent to-transparent" />
              </div>

              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-t-[50%] rounded-b-2xl border-2 border-jaipur-gold/30 pointer-events-none scale-[1.03]" />

              {/* Success Rate medallion */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-jaipur-pink-deep to-jaipur-pink border-4 border-double border-jaipur-gold rounded-2xl shadow-sandstone-hover flex flex-col items-center justify-center text-white text-center p-2 font-serifPremium hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black text-jaipur-gold drop-shadow-sm">95%</span>
                <span className="text-[10px] uppercase font-semibold tracking-wider leading-tight text-jaipur-pink-light">Success Rate</span>
              </div>

              {/* Members badge */}
              <div className="absolute -top-2 -left-4 w-24 h-24 bg-gradient-to-br from-jaipur-gold to-jaipur-gold-warm border-4 border-double border-jaipur-pink rounded-2xl shadow-sandstone flex flex-col items-center justify-center text-white text-center p-2 font-serifPremium hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black text-jaipur-dark drop-shadow-sm">500+</span>
                <span className="text-[10px] uppercase font-semibold tracking-wider leading-tight text-jaipur-dark/80">Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown size={32} className="text-jaipur-pink dark:text-jaipur-gold" />
      </div>
    </section>
  );
}
