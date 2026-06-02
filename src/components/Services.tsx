import { Heart, TrendingDown, Users, Utensils, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingDown,
      emoji: '⚖️',
      title: 'Weight Loss',
      description: 'Personalized plans to help you lose weight effectively and sustainably.',
      gradient: 'from-jaipur-pink-deep to-jaipur-pink',
      bg: 'bg-jaipur-pink-pale',
    },
    {
      icon: Heart,
      emoji: '💪',
      title: 'Weight Gain',
      description: 'Healthy and structured programs designed for safe weight gain.',
      gradient: 'from-jaipur-gold to-jaipur-gold-warm',
      bg: 'bg-amber-50',
    },
    {
      icon: Users,
      emoji: '👥',
      title: 'Online Coaching',
      description: 'Group sessions and one-on-one coaching tailored to your needs.',
      gradient: 'from-jaipur-pink to-jaipur-terracotta',
      bg: 'bg-rose-50',
    },
    {
      icon: Utensils,
      emoji: '🥗',
      title: 'Diet Planning',
      description: 'Customized meal plans based on individual goals and preferences.',
      gradient: 'from-jaipur-terracotta to-jaipur-gold',
      bg: 'bg-orange-50',
    },
    {
      icon: Zap,
      emoji: '✨',
      title: 'Lifestyle Transformation',
      description: 'Building long-term healthy habits for sustained wellness.',
      gradient: 'from-jaipur-gold to-jaipur-pink',
      bg: 'bg-yellow-50',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-jaipur-pink-pale/60 to-white dark:from-[#220e14] dark:to-[#1a0d10] relative overflow-hidden hawa-mahal-border"
    >
      {/* Hawa Mahal jali background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #E8536A 0, #E8536A 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, #E8536A 0, #E8536A 1px, transparent 0, transparent 50%)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section heading */}
        <div className="text-center mb-20 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-gold" />
            <span className="text-jaipur-gold font-serifPremium font-semibold text-xs tracking-widest uppercase">
              Palace Wellness Services
            </span>
            <span className="h-px w-10 bg-jaipur-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            Our{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent font-extrabold">
              Royal Offerings
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/65 dark:text-gray-400 font-ui max-w-xl mx-auto">
            Sovereign wellness solutions meticulously crafted for your lifestyle transformation — in the spirit of Jaipur's timeless heritage
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 bg-white dark:bg-[#2a1018] border border-jaipur-pink/15 dark:border-jaipur-pink/10 shadow-sandstone hover:shadow-sandstone-hover pink-glow-hover hover:-translate-y-2 transition-all duration-500 animate-in fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Corner ornaments */}
                <div className="absolute top-3 right-3 text-jaipur-gold/20 group-hover:text-jaipur-gold/50 transition-colors duration-300 text-lg select-none">✦</div>
                <div className="absolute bottom-3 left-3 text-jaipur-pink/15 group-hover:text-jaipur-pink/40 transition-colors duration-300 text-lg select-none">✦</div>

                {/* Icon — Hawa Mahal arch shape */}
                <div className={`w-16 h-20 rajputana-arch bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon size={26} className="text-white drop-shadow-sm" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-jaipur-dark dark:text-white mb-3 font-serifPremium group-hover:text-jaipur-pink-deep dark:group-hover:text-jaipur-pink transition-colors duration-300">
                  {service.emoji} {service.title}
                </h3>
                <p className="text-jaipur-dark/65 dark:text-gray-300 leading-relaxed font-ui text-sm">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
