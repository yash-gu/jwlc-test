export default function Gallery() {
  const images = [
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.09.23.jpeg', import.meta.url).href, title: 'Transformation Journey' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.09.24.jpeg', import.meta.url).href, title: 'Community Session' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.18 (1).jpeg', import.meta.url).href, title: 'Wellness Workshop' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.18.jpeg', import.meta.url).href, title: 'Group Coaching' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.19 (1).jpeg', import.meta.url).href, title: 'Success Stories' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.19 (2).jpeg', import.meta.url).href, title: 'Healthy Living' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.19.jpeg', import.meta.url).href, title: 'Diet Planning' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.20 (1).jpeg', import.meta.url).href, title: 'Lifestyle Change' },
    { url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.20.jpeg', import.meta.url).href, title: 'Royal Wellness' },
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a0d10] relative overflow-hidden hawa-mahal-border">
      {/* Decorative top arch row — Hawa Mahal windows */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-end justify-center gap-3 pointer-events-none select-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-t-full bg-gradient-to-b from-jaipur-pink/20 to-transparent flex-shrink-0"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section heading */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-10 bg-jaipur-pink" />
            <span className="text-jaipur-pink font-serifPremium font-semibold text-xs tracking-widest uppercase">
              Our Gallery
            </span>
            <span className="h-px w-10 bg-jaipur-pink" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-jaipur-dark dark:text-white mb-4 font-serifPremium">
            Transformation{' '}
            <span className="bg-gradient-to-r from-jaipur-pink-deep via-jaipur-pink to-jaipur-gold bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-base text-jaipur-dark/60 dark:text-gray-400 font-ui">
            See the transformation and community in action — stories from the Pink City
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-sandstone hover:shadow-sandstone-hover pink-glow-hover transform hover:scale-[1.03] transition-all duration-500 aspect-square animate-in fade-in border border-jaipur-pink/10"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover overlay with Hawa Mahal arch shape */}
              <div className="absolute inset-0 bg-gradient-to-t from-jaipur-pink-deep/80 via-jaipur-pink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end">
                <div className="p-5 w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-jaipur-gold text-sm">✦</span>
                    <p className="text-white font-semibold font-serifPremium text-base">{image.title}</p>
                  </div>
                </div>
              </div>

              {/* Corner arch decoration */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-jaipur-pink/60 via-jaipur-gold/40 to-jaipur-pink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
