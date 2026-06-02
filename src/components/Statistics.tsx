import { useState, useEffect, useRef } from 'react';

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let start = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Statistics() {
  const stats = [
    { number: 500,  label: 'Happy Members',  suffix: '+', icon: '👥', desc: 'Across Jaipur & beyond' },
    { number: 1000, label: 'Sessions',        suffix: '+', icon: '🏯', desc: 'Expert-led coaching' },
    { number: 95,   label: 'Success Rate',    suffix: '%', icon: '🌸', desc: 'Proven transformations' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Pink City gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-terracotta" />

      {/* Hawa Mahal jali overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Arch silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pointer-events-none select-none overflow-hidden h-8">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-8 h-8 rounded-t-full bg-white/10 flex-shrink-0" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serifPremium mb-2">
            Our Impact in Numbers
          </h2>
          <p className="text-jaipur-pink-light/80 font-ui text-sm">
            The Pink City's most trusted wellness community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-in fade-in scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:animate-float">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-1 font-serifPremium">
                <Counter end={stat.number} />
                {stat.suffix}
              </div>
              <p className="text-white text-lg font-semibold font-serifPremium mb-1">{stat.label}</p>
              <p className="text-jaipur-pink-light/70 text-xs font-ui">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
