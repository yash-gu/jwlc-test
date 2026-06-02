const steps = [
  {
    number: '01',
    icon: '📞',
    title: 'Free Consultation Call',
    desc: 'Book a free 1-on-1 call with Coach Mohsin. Share your goals, challenges, and current health status. Zero judgment. Zero pressure.',
    color: 'from-jaipur-pink-deep to-jaipur-pink',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Personalised Plan Created',
    desc: 'Get a customised diet and lifestyle plan built around your body, routine, and goals — no extreme diets, no unrealistic routines.',
    color: 'from-jaipur-gold to-jaipur-gold-warm',
  },
  {
    number: '03',
    icon: '👥',
    title: 'Join the Community',
    desc: 'You\'re never alone. Get daily sessions, accountability check-ins, group support, and motivation from hundreds of members on the same journey.',
    color: 'from-jaipur-pink to-jaipur-terracotta',
  },
  {
    number: '04',
    icon: '🏆',
    title: 'Transform & Celebrate',
    desc: 'See real, sustainable results — more energy, better confidence, healthier weight. Track your progress and become someone else\'s inspiration.',
    color: 'from-jaipur-terracotta to-jaipur-gold',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a0d10] relative overflow-hidden hawa-mahal-border"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-jaipur-pink/8 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-jaipur-gold/6 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-pink" />
            <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">Simple Process</span>
            <span className="h-px w-10 bg-jaipur-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            How It{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui max-w-lg mx-auto">
            No complicated programs. No extreme routines. Just 4 simple steps to a healthier you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-jaipur-pink/30 via-jaipur-gold/30 to-jaipur-pink/30 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#2a1018] border border-jaipur-pink/12 shadow-sandstone hover:shadow-sandstone-hover hover:-translate-y-1 transition-all duration-400 animate-in fade-in z-10"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Step number ring */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-sandstone relative z-10`}>
                <span className="text-2xl">{step.icon}</span>
              </div>

              {/* Number badge */}
              <span className="text-[10px] font-bold text-jaipur-pink/50 dark:text-jaipur-pink/40 font-serifPremium tracking-widest mb-2">
                STEP {step.number}
              </span>

              <h3 className="text-base font-bold text-jaipur-dark dark:text-white font-serifPremium mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-jaipur-dark/65 dark:text-gray-400 font-ui leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom urgency nudge */}
        <div className="mt-14 text-center">
          <p className="text-jaipur-dark/55 dark:text-gray-500 font-ui text-sm mb-1">
            It really is that simple. Hundreds of people from Jaipur already started.
          </p>
          <p className="text-jaipur-pink font-semibold font-serifPremium text-base mb-5">
            The only thing standing between you and results is the first step.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white font-bold rounded-xl shadow-sandstone hover:shadow-sandstone-hover hover:scale-105 transition-all duration-300 font-ui border border-jaipur-gold/20"
          >
            Book My Free Consultation 🌸
          </a>
        </div>
      </div>
    </section>
  );
}
