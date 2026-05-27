import { useState, useEffect } from 'react';

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
    {
      number: 500,
      label: 'Happy Members',
      suffix: '+',
      color: 'from-green-600 to-green-700',
    },
    {
      number: 1000,
      label: 'Sessions',
      suffix: '+',
      color: 'from-blue-600 to-blue-700',
    },
    {
      number: 95,
      label: 'Success Rate',
      suffix: '%',
      color: 'from-orange-600 to-orange-700',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-in fade-in scale-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                <Counter end={stat.number} />
                {stat.suffix}
              </div>
              <p className="text-white text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
