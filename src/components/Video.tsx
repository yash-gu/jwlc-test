import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = new URL('./videos/WhatsApp Video 2026-05-27 at 10.08.52.mp4', import.meta.url).href;
  const poster = new URL('./images/WhatsApp Image 2026-05-27 at 10.09.23.jpeg', import.meta.url).href;

  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Community Video</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Watch our coaching and transformation journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video hover:shadow-3xl transition-shadow">
            {!isPlaying ? (
              <>
                <img
                  src={poster}
                  alt="Featured Video"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all flex items-center justify-center group cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-600 rounded-full scale-100 group-hover:scale-110 opacity-30 animate-pulse"></div>
                    <button className="w-20 h-20 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play size={40} className="text-white fill-white ml-1" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <video
                className="w-full h-full object-cover"
                src={videoUrl}
                poster={poster}
                controls
                autoPlay
                playsInline
              />
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              More inspiring videos coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
