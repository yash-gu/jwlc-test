const services = [
  'Weight Loss Coaching',
  'Weight Gain Coaching',
  'Lifestyle & Wellness Consultation',
  'Personal Health Coaching',
  'Online Fitness & Wellness Programs',
  'Physical Workout Classes',
  'Nutrition & Healthy Habit Guidance',
  'Accountability & Motivation Support',
];

const features = [
  {
    icon: '🏯',
    title: 'Personalized Approach',
    desc: 'Customized plans tailored to your unique needs and goals',
    color: 'from-jaipur-pink-deep to-jaipur-pink',
  },
  {
    icon: '👑',
    title: 'Expert Support',
    desc: 'Guidance from experienced coaches and nutritionists',
    color: 'from-jaipur-gold to-jaipur-gold-warm',
  },
  {
    icon: '🌸',
    title: 'Community Support',
    desc: 'Connect with like-minded individuals on their wellness journey',
    color: 'from-jaipur-pink to-jaipur-terracotta',
  },
];

export default function About() {
  return (
    <>
      {/* ── ABOUT THE COMMUNITY ── */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a0d10] relative overflow-hidden hawa-mahal-border">
        <div className="absolute top-8 left-8 text-jaipur-pink/10 dark:text-jaipur-pink/5 text-8xl font-serifPremium select-none pointer-events-none">✦</div>
        <div className="absolute top-8 right-8 text-jaipur-gold/10 dark:text-jaipur-gold/5 text-8xl font-serifPremium select-none pointer-events-none">✦</div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-jaipur-pink" />
              <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">Our Story</span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-jaipur-pink" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
              About{' '}
              <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
                Jaipur Weight Loss Community
              </span>
            </h2>
            <p className="text-lg text-jaipur-dark/60 dark:text-gray-400 font-ui">
              Transforming lives through sustainable health goals — inspired by the Pink City
            </p>
          </div>

          <div className="grid grid-cols-1 gap-14 items-center">

            {/* Content — full width now */}
            <div className="space-y-8 animate-in fade-in duration-700 max-w-3xl mx-auto w-full">
              <div>
                <h3 className="text-3xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">Our Mission</h3>
                <p className="text-base text-jaipur-dark/75 dark:text-gray-300 leading-relaxed font-ui">
                  Inspired by the grandeur of Jaipur — the Pink City — we help individuals achieve sustainable health goals through personalized guidance, expert support, and a motivating community. Our mission is to help people transform their lifestyle naturally and effectively, just as Jaipur has stood the test of time with grace and strength.
                </p>
              </div>

              <div className="space-y-5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-jaipur-pink-pale/50 dark:bg-[#2a1018] border border-jaipur-pink/10 hover:border-jaipur-pink/30 transition-colors duration-300">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center text-xl shadow-sandstone`}>
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-jaipur-dark dark:text-white font-serifPremium mb-1">{f.title}</h4>
                      <p className="text-sm text-jaipur-dark/65 dark:text-gray-400 font-ui">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-jaipur-pink pl-4 italic text-jaipur-dark/70 dark:text-gray-400 font-serifPremium text-sm">
                "आज ही एक हेल्दी शुरुआत करें!" — Start a healthy journey today, in the spirit of the Pink City.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ME — COACH PROFILE ── */}
      <section id="coach" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jaipur-pink-pale/50 to-white dark:from-[#220e14] dark:to-[#1a0d10] relative overflow-hidden hawa-mahal-border">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-jaipur-pink/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-jaipur-gold/8 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16 animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-10 bg-jaipur-gold" />
              <span className="text-jaipur-gold font-serifPremium font-semibold text-xs tracking-widest uppercase">Meet Your Coach</span>
              <span className="h-px w-10 bg-jaipur-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
              About{' '}
              <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ── Coach photo — no effects, full visibility ── */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Gold frame */}
                <div className="p-1 rounded-2xl bg-gradient-to-br from-jaipur-gold via-jaipur-pink to-jaipur-gold-warm shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                  <img
                    src="/port-wellness.jpeg"
                    alt="Mohsin — Lifestyle & Wellness Coach"
                    className="w-full rounded-xl object-cover object-top"
                    style={{ maxHeight: '560px' }}
                  />
                </div>

                {/* Name card */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white px-6 py-3 rounded-2xl shadow-sandstone border border-jaipur-gold/30 text-center whitespace-nowrap">
                  <p className="font-bold font-serifPremium text-base">Mohsin</p>
                  <p className="text-xs text-jaipur-pink-light/80 font-ui">Lifestyle & Wellness Coach</p>
                </div>

                {/* Experience badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-jaipur-gold to-jaipur-gold-warm border-4 border-double border-jaipur-pink rounded-2xl shadow-sandstone flex flex-col items-center justify-center text-center font-serifPremium">
                  <span className="text-xl font-black text-jaipur-dark">8+</span>
                  <span className="text-[9px] uppercase font-semibold tracking-wide text-jaipur-dark/80 leading-tight">Years<br/>Exp.</span>
                </div>
              </div>
            </div>

            {/* ── Bio & services ── */}
            <div className="space-y-7 animate-in fade-in slide-in-from-right-4 duration-700 mt-8 lg:mt-0">

              {/* Intro */}
              <div className="space-y-4">
                <p className="text-base text-jaipur-dark/80 dark:text-gray-300 leading-relaxed font-ui">
                  Hello, I'm <span className="font-bold text-jaipur-pink-deep dark:text-jaipur-pink font-serifPremium">Mohsin</span>, a dedicated Lifestyle & Wellness Coach with over <span className="font-semibold text-jaipur-dark dark:text-white">8 years of experience</span> helping people transform their health, fitness, and confidence through sustainable lifestyle changes.
                </p>
                <p className="text-base text-jaipur-dark/80 dark:text-gray-300 leading-relaxed font-ui">
                  My mission is to empower individuals to achieve their health goals without extreme diets or unrealistic fitness routines. I believe that long-term success comes from building healthy habits, maintaining consistency, and creating a balanced lifestyle that fits each person's unique needs.
                </p>
                <p className="text-base text-jaipur-dark/80 dark:text-gray-300 leading-relaxed font-ui">
                  Over the years, I have successfully guided hundreds of individuals in their journey toward better health, improved energy levels, and increased self-confidence.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-jaipur-pink/40 to-transparent" />
                <span className="text-jaipur-gold text-sm">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-jaipur-pink/40 to-transparent" />
              </div>

              {/* Services list */}
              <div>
                <h4 className="text-xl font-bold text-jaipur-dark dark:text-white font-serifPremium mb-5 flex items-center gap-2">
                  <span className="text-jaipur-gold">✦</span> My Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#2a1018] border border-jaipur-pink/12 hover:border-jaipur-pink/35 hover:shadow-sandstone transition-all duration-300 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-jaipur-pink to-jaipur-gold flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-sm text-jaipur-dark/80 dark:text-gray-300 font-ui leading-tight">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing statement */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-jaipur-pink-pale to-white dark:from-[#2a1018] dark:to-[#220e14] border border-jaipur-pink/15">
                <p className="text-sm text-jaipur-dark/75 dark:text-gray-300 leading-relaxed font-ui italic">
                  Whether your goal is to lose weight, gain healthy weight, improve your lifestyle, or simply become a healthier version of yourself — I am committed to providing personalized guidance, support, and proven strategies to help you succeed.
                </p>
                <p className="mt-3 text-sm font-semibold text-jaipur-pink-deep dark:text-jaipur-pink font-serifPremium">
                  Together, we can create lasting results and build a healthier, happier future. 🌸
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-jaipur-pink-deep to-jaipur-pink text-white font-bold rounded-xl shadow-sandstone hover:shadow-sandstone-hover hover:scale-105 transition-all duration-300 font-ui border border-jaipur-gold/20"
              >
                Book a Free Consultation
                <span className="text-jaipur-gold">✦</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
