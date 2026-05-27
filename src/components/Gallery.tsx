export default function Gallery() {
  const images = [
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.09.23.jpeg', import.meta.url).href,
      title: 'Image 1',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.09.24.jpeg', import.meta.url).href,
      title: 'Image 2',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.18 (1).jpeg', import.meta.url).href,
      title: 'Image 3',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.18.jpeg', import.meta.url).href,
      title: 'Image 4',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.19 (1).jpeg', import.meta.url).href,
      title: 'Image 5',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.19 (2).jpeg', import.meta.url).href,
      title: 'Image 6',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.19.jpeg', import.meta.url).href,
      title: 'Image 7',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.20 (1).jpeg', import.meta.url).href,
      title: 'Image 8',
    },
    {
      url: new URL('./images/WhatsApp Image 2026-05-27 at 10.10.20.jpeg', import.meta.url).href,
      title: 'Image 9',
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See the transformation and community in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 aspect-square animate-in fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start">
                <div className="p-6 text-white">
                  <p className="text-xl font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
