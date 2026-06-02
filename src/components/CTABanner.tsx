export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a0d10] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-jaipur-pink/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-700 relative z-10">
        {/* Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(232,83,106,0.2)]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-jaipur-pink-deep via-jaipur-pink to-jaipur-terracotta" />

          {/* Hawa Mahal jali overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%),
                repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)
              `,
              backgroundSize: '18px 18px',
            }}
          />

          {/* Top arch crenellations */}
          <div className="absolute top-0 left-0 right-0 flex justify-center gap-3 overflow-hidden h-6 pointer-events-none select-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-b-full bg-white/15 flex-shrink-0" />
            ))}
          </div>

          {/* Gold border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-jaipur-gold/30 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 p-12">
            {/* Ornament */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-16 bg-jaipur-gold/60" />
              <span className="text-jaipur-gold text-xl">🏯</span>
              <span className="h-px w-16 bg-jaipur-gold/60" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serifPremium leading-tight">
              Take the first step toward a{' '}
              <span className="text-jaipur-gold">healthier lifestyle</span>{' '}
              today!
            </h2>
            <p className="text-white/85 text-base mb-8 font-ui max-w-xl mx-auto">
              Join thousands of members from the Pink City who have already transformed their lives with Jaipur's most trusted wellness community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-jaipur-pink-deep font-bold rounded-xl hover:bg-jaipur-pink-pale transform hover:scale-105 transition-all duration-300 shadow-lg font-ui"
              >
                Join Now 🌸
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/15 text-white font-bold rounded-xl border-2 border-jaipur-gold/60 hover:bg-white/25 hover:border-jaipur-gold transform hover:scale-105 transition-all duration-300 shadow-lg font-ui"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Hindi tagline */}
            <p className="mt-8 text-jaipur-gold/80 text-sm font-serifPremium italic">
              "आज ही एक हेल्दी शुरुआत करें!" — Start a healthy journey today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
